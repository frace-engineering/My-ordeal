const see = document.getElementsByTagName("p");
        console.log(see.length);
        console.log(see[0].innerText);
        see[0].style.backgroundColor="white";
        console.log(see[1].innerText);
        see[0].style.textAlign="left";
        see[0].style.color="blue";
        see[0].backgroundimage="url(daddyAndSon.mp4)";
        see[1].style.backgroundColor="pink";
        const images = document.getElementsByTagName("img");
        console.log(images.length);
        console.log(images[8].width);
        //images[3].src="cuteme.jpg";
        //console.log(images[4].alt);
        const asides = document.getElementsByTagName("aside");
        console.log(asides[0].innerHTML);
        asides.style.backgroundColor="green";
    
