import { useEffect, useRef, useState } from "react";

export function ImageViewer() {
  const [image, setImage] = useState<{ src: string; alt: string } | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const enhance = () => {
      document.querySelectorAll<HTMLImageElement>("img:not([data-viewer-image]):not([data-no-enlarge])").forEach(img => {
        img.tabIndex = 0;
        img.setAttribute("role", "button");
        img.setAttribute("aria-haspopup", "dialog");
        img.setAttribute("aria-label", `Enlarge image: ${img.alt || "Photo"}`);
        img.dataset.enlargeable = "true";
      });
    };
    enhance();
    const observer = new MutationObserver(enhance);
    observer.observe(document.getElementById("root")!, { childList: true, subtree: true });
    const open = (event: MouseEvent | KeyboardEvent) => {
      if (!(event.target instanceof HTMLImageElement) || !event.target.dataset.enlargeable) return;
      if (event instanceof KeyboardEvent && !["Enter", " "].includes(event.key)) return;
      event.preventDefault();
      event.stopPropagation();
      trigger.current = event.target;
      setImage({ src: event.target.currentSrc || event.target.src, alt: event.target.alt });
    };
    document.addEventListener("click", open, true);
    document.addEventListener("keydown", open, true);
    return () => {
      observer.disconnect();
      document.removeEventListener("click", open, true);
      document.removeEventListener("keydown", open, true);
    };
  }, []);

  useEffect(() => {
    if (!image || !dialog.current) return;
    dialog.current.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      trigger.current?.focus();
    };
  }, [image]);

  return <dialog ref={dialog} className="image-viewer" aria-label="Enlarged image" onClose={() => setImage(null)} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
    {image && <>
      <button type="button" className="image-viewer-close" onClick={() => dialog.current?.close()} autoFocus aria-label="Close enlarged image">×</button>
      <img data-viewer-image src={image.src} alt={image.alt} />
    </>}
  </dialog>;
}
