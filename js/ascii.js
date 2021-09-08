(() => {
    const frame = document.querySelector('#frame');
    const animationSelected = document.querySelector('#animation');
    const sizeSelected = document.querySelector('#size');
    const btnStart = document.querySelector('#start');
    const btnStop = document.querySelector('#stop');
    const checkedSpeed = document.querySelector('#speed');
    let animationsFrames = [];
    let index = 0;
    let timer;
    let speed = 250;

    frame.style.fontSize = sizeSelected.value + 'pt';
    btnStop.disabled = true;

    btnStart.addEventListener('click', () => {
        startAnimation();
        controlDisabled(true, false);
    });

    btnStop.addEventListener('click', () => {
        stopAnimation();
        controlDisabled(false, true);
    });

    checkedSpeed.addEventListener('change', () => {
        checkedSpeed.checked ? setSpeed(50) : setSpeed(250);
    });

    animationSelected.addEventListener('change', () => {
        frame.value = ANIMATIONS[animationSelected.value];
        restartAnimation();
    });

    sizeSelected.addEventListener('change', (e) => {
        frame.style.fontSize = sizeSelected.value + 'pt';
    });

    const startAnimation = () => {
        if (animationSelected.value != 'blank') {
            animationsFrames = ANIMATIONS[animationSelected.value].split('=====');
        } else {
            animationsFrames = frame.value.split('=====');
        }
        index = 0;
        timer = setInterval(() => {
            frame.value = getNextFrame();
        }, speed);
    };

    const stopAnimation = () => {
        clearInterval(timer);
    };

    const restartAnimation = () => {
        if (btnStart.disabled) {
            stopAnimation();
            startAnimation();
        }
    };

    const getNextFrame = () => {
        if (animationsFrames != undefined && animationsFrames.length > 0) {
            let nextframe = animationsFrames[index];
            if (index < animationsFrames.length - 1) {
                index++;
            } else {
                index = 0;
            }
            return nextframe;
        }
    };

    const controlDisabled = (s, p) => {
        btnStart.disabled = s;
        btnStop.disabled = p;
    };

    const setSpeed = (val) => {
        speed = val;
        restartAnimation();
    };

})();





