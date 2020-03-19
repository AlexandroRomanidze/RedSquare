<script>
            pos = 0;
            counter = 0;
            timeleft = 10;
            box = document.getElementById('box');
            clockDiv = document.getElementById('clock');
            container = document.getElementById('example');
            counterDiv = document.getElementById('counter');
            restartButton = document.getElementById('restart');
            startButton = document.getElementById('start');
            stopButton = document.getElementById('stop');
            refreshButton = document.getElementById('refresh');

            function boxStart() {
                time = setInterval(move, 10);
                document.getElementById('start').value = "Run";
                startButton.disabled = true;
                counter += 1;
                counterDiv.innerHTML = counter;
                stopButton.disabled = false;
            }

            function boxStop() {
                clearInterval(time);
                box.style.background = "red";
                document.getElementById('start').value = "Resume";
                startButton.disabled = false;
                stopButton.disabled = true;
                counter += 1;
                counterDiv.innerHTML = counter;
            }

            function boxReStart(){
                if(pos==270){
                    pos = 0;
                    time = setInterval(move, 10);
                    stopButton.disabled = false;
                    restartButton.disabled = true;
                    startButton.disabled = true;
                    counter += 1;
                    counterDiv.innerHTML = counter;
                }
            }
            function move () {
                if(pos >= 270){
                    clearInterval(time);
                    box.style.background = "red";
                    restartButton.style.display = 'block';
                    startButton.disabled = true;
                    stopButton.disabled = true;
                    restartButton.disabled = false;
                } else {
                    pos += 1;
                    box.style.background = "blue";
                    box.style.left = pos +'px';
                    box.innerHTML = pos;
                    if(pos==75){
                        document.getElementById('bonusPoint').style.display = 'block';
                    }  
                }
            }
            function timer(){
                if(timeleft <= 0){
                    clearInterval(downloadTimer);
                    clearInterval(time);
                    clockDiv.innerHTML = "Finished";
                    startButton.disabled = true;
                    stopButton.disabled = true;
                    restartButton.disabled = true;
                    refreshButton.style.display = 'block';
                } else {
                    clockDiv.innerHTML = timeleft;
                }
                 timeleft -= 1;
            }

            function hideButton(){
                counter += 2;
                counterDiv.innerHTML = counter;
                document.getElementById('bonusPoint').style.display = 'none';  
            }
        </script>
