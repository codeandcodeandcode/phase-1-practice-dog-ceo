console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", ()=>{
    let lis = [];
    //showed al images from fetch
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';

    fetch(imgUrl).then(a=>a.json()).then(img=>{
        img.message.forEach(i => {
            let m = document.createElement("img");
            m.setAttribute("src", i);
            document.body.append(m);
        });
    })

        //Fetched all dog breeds
    fetch(breedUrl).then(a=>a.json()).then(b=>{
        let all = b.message;
        for (const k in all) {
            all[k].forEach(i => {
                let li = document.createElement("li");
                    li.innerHTML = i;
                    lis.push(li)
    document.querySelector("#dog-breeds").append(li);
    li.onclick = () => li.style.color = "green"
                });
            }
        })
        //On select change, filtered throught the lists array and displayed them
        document.querySelector("#breed-dropdown").addEventListener("change", f=>{
            let ss = f.target.value;
            let c = lis.filter(b=>b.textContent.charAt(0)==ss);
            document.querySelector("#dog-breeds").innerHTML = ""
            c.forEach(s=>{
                document.querySelector("#dog-breeds").append(s);
            })
        })
    })