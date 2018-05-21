const canvas = document.getElementById('canvas');
const ctx    = canvas.getContext('2d');

let img = new Image();
let filename = '';

const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');

//Add Filter and Effects

document.addEventListener('click', (e)=>{
if(e.target.classList.contains('filter-btn')){
    if(e.target.classList.contains('brightness-add')){
        Caman('#canvas', img, function(){
            this.brightness(5).render();
        });
    } else if(e.target.classList.contains('brightness-remove')){
        Caman('#canvas', img, function(){
            this.brightness(-5).render();
        });
    }
    else if(e.target.classList.contains('contrast-add')){
        Caman('#canvas', img, function(){
            this.contrast(5).render();
        });
    }

    else if(e.target.classList.contains('contrast-remove')){
        Caman('#canvas', img, function(){
            this.contrast(-5).render();
        });
    }

    else if(e.target.classList.contains('saturation-add')){
        Caman('#canvas', img, function(){
            this.saturation(5).render();
        });
    }

    else if(e.target.classList.contains('saturation-remove')){
        Caman('#canvas', img, function(){
            this.saturation(-5).render();
        });
    }

    else if(e.target.classList.contains('vibrance-add')){
        Caman('#canvas', img, function(){
            this.vibrance(5).render();
        });
    }

    else if(e.target.classList.contains('vibrance-remove')){
        Caman('#canvas', img, function(){
            this.vibrance(-5).render();
        });
    }

    else if(e.target.classList.contains('vintage-add')){
        Caman('#canvas', img, function(){
            this.vintage().render();
        });
    }

    else if(e.target.classList.contains('lomo-add')){
        Caman('#canvas', img, function(){
            this.lomo().render();
        });
    }

    else if(e.target.classList.contains('clarity-add')){
        Caman('#canvas', img, function(){
            this.clarity().render();
        });
    }

    else if(e.target.classList.contains('sincity-add')){
        Caman('#canvas', img, function(){
            this.sincity().render();
        });
    }

    else if(e.target.classList.contains('crossprocess-add')){
        Caman('#canvas', img, function(){
            this.crossprocess().render();
        });
    }

    else if(e.target.classList.contains('pinhole-add')){
        Caman('#canvas', img, function(){
            this.pinhole().render();
        });
    }

    else if(e.target.classList.contains('nostalgia-add')){
        Caman('#canvas', img, function(){
            this.nostalgia().render();
        });
    }

    else if(e.target.classList.contains('hermajesty-add')){
        Caman('#canvas', img, function(){
            this.hermajesty().render();
        });
    }

}
});


//Revert the filters
revertBtn.addEventListener('click', ()=>{
    Caman('#canvas', img, function(){
        this.revert();
    });
});




//Upload File
uploadFile.addEventListener('change', () => {
    //Get file
    const file = document.getElementById('upload-file').files[0];
    //Init FileReader

    const reader = new FileReader();
    if(file){
        //Set the filename
        filename = file.name;
        //Read data as URL
        reader.readAsDataURL(file);
    }

    reader.addEventListener('load', ()=>{
        //Create a img variable
        img = new Image();
        //Set src
        img.src = reader.result;
        //on image load, add to canvas
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            canvas.removeAttribute('data-caman-id');
        }

    }, false);
});

//Download Event
downloadBtn.addEventListener('click', (e)=>{
    //Get the file extension
    const fileExtension = filename.slice(-4);

    //Init newFile name variable
    let newFileName;

    //Check the image type

    if(fileExtension === '.jpg' || fileExtension === '.png'){
        newFileName = filename.substring(0, filename.length-4) + '-edited.jpg';
    }
    //Call download

    download(canvas, newFileName);
});

//Download function
function download(canvas, filename){
    //Init Event
    let e;
    //Create Link
    const link = document.createElement('a');
    //Set Some Properties
    link.download = filename;
    link.href = canvas.toDataURL('image/jpeg', 0.8);


    //New mouse event
    e = new MouseEvent('click');
    link.dispatchEvent(e);
}