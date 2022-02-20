let range = document.querySelectorAll("input")

        let image = document.querySelector("#image")
        let invert = document.querySelector(".invert")
        let contrast = document.querySelector(".contrast")
        let brightness = document.querySelector(".brightness")
        let hueRotate = document.querySelector(".hueRotate")
        let saturate = document.querySelector(".saturate")
        range.forEach((r) => {
            r.addEventListener("input", (e) => {
                if (e.target.id == "invert") {
                    image.style.filter = `invert(${e.target.value}%)`
                    invert.innerHTML = `:-${e.target.value}%`
                }
                else if (e.target.id == "brightness") {
                    image.style.filter = `brightness(${e.target.value}%)`
                    brightness.innerHTML = `:-${e.target.value}%`
                }
                else if (e.target.id == "contrast") {
                    image.style.filter = `contrast(${e.target.value}%)`
                    contrast.innerHTML = `:-${e.target.value}%`
                }
                else if (e.target.id == "saturate") {
                    image.style.filter = `saturate(${e.target.value}%)`
                    saturate.innerHTML = `:-${e.target.value}%`
                }
                else if (e.target.id == "hueRotate") {
                    image.style.filter = `hue-rotate(${e.target.value}deg)`
                    hueRotate.innerHTML = `:-${e.target.value}%`
                }
            })
        })