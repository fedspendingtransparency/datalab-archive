<div class="carouselPart2">

<div class="mySlidesOutter">
    <div class="carouselInner1">
        <div class="mySlidesInner1 fade">
            <div class="part2HeaderDescription">
                In this and the next several sections, we consider a Markov process with the discrete time space  and with a discrete (countable) state space. Recall that a Markov process with a discrete state space is called a Markov chain, so we are studying discrete-time Markov chains.
            </div>
        </div>
        <div class="mySlidesInner1 fade">
            <div class="part2HeaderDescription">
                Suppose again that  is a homogeneous, discrete-time Markov chain with state space . With a discrete state space, the transition kernels studied in the general introduction become transition matrices, with rows and columns indexed by  (and so perhaps of infinite size).
            </div>
        </div>
        <!-- The dots/circles -->
        <div style="text-align:center">
            <span class="dot2" onclick="changeSlide(1,1)"></span> 
            <span class="dot2" onclick="changeSlide(1,2)"></span> 
        </div>
    </div>
    <svg id="svg-3"></svg>
</div>

<div class="mySlidesOutter">
    <div class="carouselInner">
        <div class="mySlidesInner2 fade">
            <div class="part2HeaderDescription">
                In this and the next several sections, we consider a Markov process with the discrete time space  and with a discrete (countable) state space. Recall that a Markov process with a discrete state space is called a Markov chain, so we are studying discrete-time Markov chains.
                Suppose again that  is a homogeneous, discrete-time Markov chain with state space . With a discrete state space, the transition kernels studied in the general introduction become transition matrices, with rows and columns indexed by  (and so perhaps of infinite size).
            </div>
        </div>
        <div class="mySlidesInner2 fade">
            <div class="part2HeaderDescription">
                Suppose again that  is a homogeneous, discrete-time Markov chain with state space . With a discrete state space, the transition kernels studied in the general introduction become transition matrices, with rows and columns indexed by  (and so perhaps of infinite size).
            </div>
        </div>
        <div class="mySlidesInner2 fade">
            <div class="part2HeaderDescription">
                In this and the next several sections, we consider a Markov process with the discrete time space  and with a discrete (countable) state space. Recall that a Markov process with a discrete state space is called a Markov chain, so we are studying discrete-time Markov chains.
            </div>
        </div>
        <!-- The dots/circles -->
        <div style="text-align:center">
            <span class="dot2" onclick="changeSlide(2,1)"></span> 
            <span class="dot2" onclick="changeSlide(2,2)"></span> 
            <span class="dot2" onclick="changeSlide(2,3)"></span> 
        </div>
    </div>
    <svg id="svg-4"></svg>
</div>

<div class="mySlidesOutter">
    <div class="carouselInner">
        <div class="mySlidesInner3 fade">
            <div class="part2HeaderDescription">
                In this and the next several sections, we consider a Markov process with the discrete time space  and with a discrete (countable) state space. Recall that a Markov process with a discrete state space is called a Markov chain, so we are studying discrete-time Markov chains.
                Suppose again that  is a homogeneous, discrete-time Markov chain with state space . With a discrete state space, the transition kernels studied in the general introduction become transition matrices, with rows and columns indexed by  (and so perhaps of infinite size).
            </div>
        </div>
        <div class="mySlidesInner3 fade">
            <div class="part2HeaderDescription">
                In this and the next several sections, we consider a Markov process with the discrete time space  and with a discrete (countable) state space. Recall that a Markov process with a discrete state space is called a Markov chain, so we are studying discrete-time Markov chains.
            </div>
        </div>
        <div class="mySlidesInner3 fade">
            <div class="part2HeaderDescription">
                Suppose again that  is a homogeneous, discrete-time Markov chain with state space . With a discrete state space, the transition kernels studied in the general introduction become transition matrices, with rows and columns indexed by  (and so perhaps of infinite size).
            </div>
        </div>
        <div class="mySlidesInner3 fade">
            <div class="part2HeaderDescription">
                A Markov process with the discrete time space  and with a discrete (countable) state space. Recall that a Markov process with a discrete state space is called a Markov chain, so we are studying discrete-time Markov chains.
                Suppose again that  is a homogeneous, discrete-time Markov chain with state space . With a discrete state space, the transition kernels studied in the general introduction become...
            </div>
        </div>
        <!-- The dots/circles -->
        <div style="text-align:center">
            <span class="dot2" onclick="changeSlide(3,1)"></span> 
            <span class="dot2" onclick="changeSlide(3,2)"></span> 
            <span class="dot2" onclick="changeSlide(3,3)"></span> 
            <span class="dot2" onclick="changeSlide(3,4)"></span> 
        </div>
    </div>
    <svg id="svg-5"></svg>
</div>

<!-- Next and previous buttons -->
<a class="prev2" onclick="nextSlide(-1)">&#10094;</a>
<a class="next2" onclick="nextSlide(1)">&#10095;</a>
<br/>

</div>
<script>
var macroIndex = 1;
showMacroSlides(macroIndex);

// Next/previous controls
function nextSlide(n) {
    showMacroSlides(macroIndex += n);
}

// Thumbnail image controls
function changeSlide(n) {
    showMicroSlides(microIndex = n);
}

function showMacroSlides(n) {
  console.log("in show macro: ", n);
    var k;
    var macroSlides = document.getElementsByClassName("mySlidesOutter");
    var microIndex = 1;
    if (n > macroSlides.length) {macroIndex = 1} 
    if (n < 1) {macroIndex = macroSlides.length}
    for (k = 0; k < macroSlides.length; k++) {
        macroSlides[k].style.display = "none"; 
    }
    macroSlides[macroIndex-1].style.display = "block"; 
    showMicroSlides(macroIndex,microIndex);
}

function showMicroSlides(j,n) {
  console.log("in show micro: ", n);
    var h;
    var microSlides = document.getElementsByClassName(`mySlidesInner${j}`);
    var dot = document.getElementsByClassName("dot2");
    if (n > microSlides.length) {microIndex = 1} 
    if (n < 1) {microIndex = microSlides.length}
    for (h = 0; h < microSlides.length; h++) {
        microSlides[h].style.display = "none"; 
    }
    for (h = 0; h < dot.length; h++) {
        dot[h].className = dot[h].className.replace(" active", "");
    }
    microSlides[slideIndex-1].style.display = "block"; 
    dot[slideIndex-1].className += " active";
  }
</script>
</div> 