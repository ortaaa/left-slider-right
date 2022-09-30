// let slideCount=1;

// function nextSlide()
// {
//     let margin=slideCount*110;
//     document.querySelector('.slide').style.marginLeft=-margin+"%";
//     slideCount++;
// }

// function prevSlide()
// {
//     slideCount--;
//     let margin=slideCount*110;
//     document.querySelector('.slide').style.marginLeft=-margin+"%";
    
// }

let slideCount=1;

function moveToslide(slideNumber)
{
    let margin=slideCount*100;
    document.querySelector('.slide').style.transition=".5s";
    document.querySelector('.slide').style.marginLeft=-margin+"%";
    
    if(slideNumber==7){
        slideCount=1;
        setTimeout(function()
        {document.querySelector('.slide').style.marginLeft="-100%";
        document.querySelector('.slide').style.transition="0s"; 
         
    },500)
    }

    if(slideNumber==0){
        slideCount=1;
        setTimeout(function()
        {document.querySelector('.slide').style.marginLeft="-400%";
        document.querySelector('.slide').style.transition="0s"; 
         
    },500)
    }
}

function nextSlide()
{
        slideCount++; 
        moveToslide(slideCount);    
}


function prevSlide()
{
    slideCount--;
    moveToslide(slideCount);
}

