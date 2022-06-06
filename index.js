const descriptions = ['Full-stack developer', 'Software engineer', 'Full-stack programmer', 'NodeJS lover', 'Skateboarder', 'Single guy 😉']

async function sleep(time) {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

async function writeNew(actual) {
    if(actual == descriptions.length - 1) {
        let random = Math.floor(Math.random() * 10);
        if(random != 0) return writeNew(0);
    }

    let actualText = document.getElementById('writing').innerHTML;

    document.getElementById('writingBar').style.animationName = 'none';

    for(let a of actualText.split(``)) {
        await sleep(50)
        document.getElementById('writing').innerHTML = document.getElementById('writing').innerHTML.substr(0, document.getElementById('writing').innerHTML.length - 1);
    };

    let text = descriptions[actual];
    let newText = '';

    for(let a of text.split(``)) {
        await sleep(100);
        newText+=a
        document.getElementById('writing').innerHTML = newText;
    };

    await sleep(500);
    document.getElementById('writingBar').style.animationName = 'writingBar';

    await sleep(5000);
    let newActual = actual == descriptions.length - 1 ? 0 : actual + 1;
    writeNew(newActual);
}

window.onload = async function() {

    document.getElementById('mobileMenu').onclick = () => {
        let x = document.getElementById('navbar');

        document.getElementById('mobileMenu').style.display = 'flex';

        if (x.style.display === "flex") {
            x.style.display = "none";
        } else {
            x.style.display = "flex";
        }
    }

    document.querySelectorAll('#navbar a').forEach(function (a) {
        a.onclick = () => {
            if (document.getElementById('mobileMenu').style.display === "flex") {
                document.getElementById('navbar').style.display = "none";
            }
        }
    })

    document.addEventListener('scroll', function(e) {
        if(0 > document.getElementById('contact').getBoundingClientRect().top) {
            document.getElementById('contactDot').classList.add('active');
            document.getElementById('certificatesDot').classList.remove('active');
            return;
        } else if(0 > document.getElementById('certificates').getBoundingClientRect().top) {
            document.getElementById('contactDot').classList.remove('active');
            document.getElementById('certificatesDot').classList.add('active');
            document.getElementById('projectsDot').classList.remove('active');
            return;
        } else if(0 > document.getElementById('projects').getBoundingClientRect().top) {
            document.getElementById('certificatesDot').classList.remove('active');
            document.getElementById('projectsDot').classList.add('active');
            document.getElementById('habilitiesDot').classList.remove('active');
            return;
        } else if(0 > document.getElementById('habilities').getBoundingClientRect().top) {
            document.getElementById('projectsDot').classList.remove('active');
            document.getElementById('habilitiesDot').classList.add('active');
            document.getElementById('aboutDot').classList.remove('active');
            return;
        } else if(0 > document.getElementById('about').getBoundingClientRect().top) {
            document.getElementById('habilitiesDot').classList.remove('active');
            document.getElementById('aboutDot').classList.add('active');
            document.getElementById('meetingDot').classList.remove('active');
            return;
        } else if(0 > document.getElementById('meeting').getBoundingClientRect().top) {
            document.getElementById('aboutDot').classList.remove('active');
            document.getElementById('meetingDot').classList.add('active');
            return;
        }
    })
    
    await sleep(1000);
    writeNew(0);
}