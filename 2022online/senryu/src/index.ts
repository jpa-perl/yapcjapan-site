import WebFont from "webfontloader";
const main = () => {
  const canvas = document.querySelector("canvas");
  if (!canvas) return;

  const initialParams = new URLSearchParams(location.search);

  const context = canvas.getContext("2d");
  const inputs = [1, 2, 3].map((i) => {
    const query = "line" + i;
    const initial = initialParams.get(query);
    const elm = document.querySelector<HTMLInputElement>("#" + query);
    if (elm && initial) elm.value = initial;
    return elm;
  });
  const nameInput = document.querySelector<HTMLInputElement>("#nameInput");
  const initialName = initialParams.get("nameInput");
  if (nameInput && initialName) nameInput.value = initialName;

  if (location.search) {
    history.replaceState({}, document.title, "/2022online/senryu/");
  }

  const updateCanvas = () => {
    let tweetText = "";
    const urlParams = new URLSearchParams();
    if (!context) return;
    canvas.width = 1280;
    canvas.height = 720;
    const renderWidth = 350;
    const renderHeight =
      image.naturalHeight * (renderWidth / image.naturalWidth);

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(
      image,
      canvas.width - renderWidth,
      canvas.height - renderHeight,
      renderWidth,
      renderHeight
    );

    context.fillStyle = "black";
    let height = -10;
    inputs.forEach((elm, i) => {
      if (!elm?.value) return;
      const length = Math.max(elm.value.length, 5);
      const fontSize = (canvas.width - 60) / ((length ?? 7) + 0.5);
      context.font = `${fontSize}px "Yuji Syuku"`;
      height += fontSize;
      context.fillText(elm.value, 30, height);
      tweetText += `${elm.value} `;
      urlParams.append("line" + (i + 1), elm.value);
    });
    const name = nameInput?.value;
    if (!name) return;
    const nameFontSize = 55;
    context.font = `${nameFontSize}px "Yuji Syuku"`;
    context.textAlign = "right";
    context.fillText(name, canvas.width - renderWidth - 10, canvas.height - 30);

    urlParams.append("nameInput", name);

    const params = new URLSearchParams();
    params.append(
      "url",
      `https://yapcjapan.org/2022online/senryu/?${urlParams}`
    );
    params.append(
      "text",
      `[保存した画像またはクリップボードにコピーした画像を貼り付けよう]${tweetText}by ${name}`
    );
    params.append("hashtags", ["yapc川柳", "yapcjapan"].join(","));
    const twitterLink =
      document.querySelector<HTMLAnchorElement>("#twitterLink");
    if (twitterLink)
      twitterLink.href = `https://twitter.com/intent/tweet?${params}`;
  };
  [...inputs, nameInput].forEach((elm) => {
    elm?.addEventListener("input", updateCanvas);
  });

  document.querySelector("#copyButton")?.addEventListener("click", (event) => {
    updateCanvas();
    canvas.toBlob((blob) => {
      if (!blob) return;
      const item = new ClipboardItem({ "image/png": blob });
      navigator.clipboard.write([item]).then(() => {
        if (!event.target) return;
        const target = event.target as HTMLInputElement;
        const original = target.innerHTML;
        target.innerHTML = `<i class="material-icons">check</i>コピーされました`;
        window.setTimeout(() => {
          target.innerHTML = original;
        }, 850);
      });
    });
  });

  document.querySelector("#downloadButton")?.addEventListener("click", () => {
    updateCanvas();
    const link = document.createElement("a");
    link.download = `yapcsenryu_${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
  });

  updateCanvas();
};
const image = new Image();
WebFont.load({
  google: {
    families: ["Yuji Syuku"],
  },
  fontactive: (familyname) => {
    if (familyname !== "Yuji Syuku") return;
    image.onload = () => {
      window.setTimeout(() => {
        main();
        document.getElementById("loading")?.remove();
        const mainElm = document.querySelector("main");
        if (mainElm) mainElm.setAttribute("style", "");
      }, 500);
    };
    image.src = "./assets/logo.png";
  },
});
