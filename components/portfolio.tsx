import Link from "next/link";
import Badge from "./badge";
import Image from "next/image";

interface PropTypes {
  src: string;
  title: string;
  tags: string[];
  live: string;
  github: string;
  desc: string;
  badge?: string;
}

export default function Portfolio({
  src,
  title,
  tags,
  live,
  github,
  desc,
  badge,
}: PropTypes): React.ReactNode {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-md border">
      <div className="h-52 w-full overflow-hidden rounded-t-lg bg-zinc-50">
        <Image
          src={src}
          alt=""
          width={338}
          height={208}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col px-4 py-2">
        <h5 className="mb-1 font-semibold text-black">
          <Link href={live} className="hover:underline">
            {title}
          </Link>{" "}
          {badge !== undefined ? (
            <span className="h-4  rounded-lg bg-orange-500 px-2 py-0.5 text-[10px] text-white">
              {badge}
            </span>
          ) : null}
        </h5>
        <p className="mb-2 text-xs text-zinc-500">{desc}</p>

        <div className="mb-2.5 mt-1 flex flex-wrap gap-1">
          {tags?.map((tag) => <Badge key={tag}>{tag}</Badge>)}
        </div>
        <div className="flex items-center space-x-1.5">
          <Link
            href={live}
            className="rounded-sm border border-zinc-200 bg-zinc-100 px-2 py-1 text-sm hover:bg-zinc-700 hover:text-white"
          >
            Live Link
          </Link>
          {github !== "" ? (
            <Link
              href={github}
              className="rounded-sm border border-zinc-200 bg-zinc-100 px-2 py-1 text-sm hover:bg-zinc-700 hover:text-white"
            >
              GitHub
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
