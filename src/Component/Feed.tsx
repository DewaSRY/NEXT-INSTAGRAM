import { FC } from "react";
import { Stories } from "./Stories";

interface FeedProps {}
const Feed: FC<FeedProps> = (): JSX.Element => {
  return (
    <div>
      <section>
        {/* Stories */}
        <Stories />
        {/* Posts */}
      </section>
      <section>
        {/* Mini Profile */}
        {/* Suggestions */}
      </section>
    </div>
  );
};

export default Feed;
