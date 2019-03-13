var orb = (function () {

    'use strict';

    var setToggleCLass = function (element, className) {
        if (element.classList) {
            element.classList.toggle(className);
        } else {
            var classes = element.className.split(' ');
            var existingIndex = classes.indexOf(className);

            if (existingIndex >= 0)
                classes.splice(existingIndex, 1);
            else
                classes.push(className);

            element.className = classes.join(' ');
        }
    };

    var getLine = function (lineElement) {
        return (lineElement.getAttribute('x2'));
    };

    var setAddClass = function (element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    };

    var removeClass = function (element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    };

    var cloneContent = function (outputIdTextElement, inputIdTextElement) {
        document.getElementById(inputIdTextElement).innerText = document.getElementById(outputIdTextElement).innerText;
    };

    var getLineProgress = function () {
        var percentage = textarea.innerText.length / tweetLength;
        var newOffset = pathLength - (pathLength * percentage) + 'px';
        if (pathLength - (pathLength * percentage) < 0) {
            progress.style.strokeDashoffset = 0;
        } else {
            progress.style.strokeDashoffset = newOffset;
        }
    };

    var updateArea = function () {
        var length = textarea.innerText.length;
        if (event.code == 'Backspace' || event.code == 'Delete') {
            cloneContent('textarea', 'hidden_area');
            if (length <= tweetLength) {
                progress.setAttribute('class', 'progress');
                getLineProgress();
            }
        } else {
            getLineProgress();
            length > warningZone && length < dangerZone ? setAddClass(progress, 'warn') : false;
            length >= dangerZone ? setAddClass(progress, 'danger') : false;
            length > tweetLength ? setAddClass(progress, 'tragedy') : false;
        }
        updateText();
    };

    var updateCounter = function () {
        var len = textarea.innerText.length;
        var per = textarea.innerText.length / tweetLength;

        counter.textContent = tweetLength - len;
        len >= tweetLength ? setAddClass(counter, 'danger') : removeClass(counter, 'danger');
    };

    var updateText = function () {
        var text = textarea.innerText;
        if (text.length >= tweetLength) {
            var trueText = text.slice(0, tweetLength);
            var falseText = trueText + "<i>" + text.slice(tweetLength) + "</i>";

            textarea.innerHTML = falseText;
            var range = document.createRange();
            range.selectNodeContents(textarea);
            range.collapse(false);
            var selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };

    var progress = document.querySelector('.progress'),
        textarea = document.getElementById('textarea'),
        counter = document.querySelector('.counter');

    var tweetLength = 120,
        warningZone = Math.floor(tweetLength * (2/3)),
        dangerZone = Math.floor(tweetLength * (5/6));

    var pathLength = getLine(progress);

    progress.style.strokeDashoffset = pathLength + 'px';
    progress.style.strokeDasharray = pathLength + 'px';

    function orbControl() {
        updateArea();
        updateCounter();
    }

    return {
        orbControl: orbControl
    }

}());
