import { MediaItemProps } from "../../types/types";

const MediaItem: React.FC<MediaItemProps> = ({

}) => {
  // const player = usePlayer();
  // const imageUrl = useLoadImage(data);

  const handleClick = () => {



  };

  return (
    <div
      onClick={handleClick}
      className="
        flex 
        items-center 
        gap-x-3 
        cursor-pointer 
        hover:bg-neutral-800/50 
        w-full 
        p-2 
        rounded-md
      "
    >
      <div
        className="
          relative 
          rounded-md 
          min-h-[48px] 
          min-w-[48px] 
          overflow-hidden
        "
      >
        <img src="/images/music-placeholder.png" alt="" />
      </div>

    </div>
  );
}

export default MediaItem;
