import { site } from "@/lib/site";

export default function Fab() {
  return (
    <a className="btn btn-primary fab" href={site.phoneHref} aria-label="Zavolat">
      ☎ Zavolat
    </a>
  );
}
