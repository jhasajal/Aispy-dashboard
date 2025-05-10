import { cn } from "@/lib/utils";

type PropsType = {
  className?: string;
};

export default function VideoEmbed({ className }: PropsType) {
  return (
    <div
      className={cn(
        "rounded-[10px] bg-white px-7.5 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
          Camera Feed
        </h2>
        <h6 className="underline text-blue"> <a href="https://brilliant-caramel-e2450a.netlify.app/demo/index.html" target="_blank">Expand</a>  </h6>
      </div>

      <iframe
      //change
        src="https://brilliant-caramel-e2450a.netlify.app/demo/index.html"
        width="100%"
        height="380"
        style={{ border: "none" }}
        title="Embedded Demo"
        allow="camera;microphone;fullscreen"
        className="mt-4 rounded-[10px] shadow-lg"
      />
    </div>
  );
}
