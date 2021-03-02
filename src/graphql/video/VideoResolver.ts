import { Resolver, Query, InputType, Field, Mutation, Arg } from "type-graphql";
import Video from "./Video"
import VideoSchema from '../../model/VideoSchema'

@InputType()
class videoInput {
  @Field()
  description: string;
  @Field()
  name: string;
  @Field()
  category: string;
}
@Resolver(Video)
class VideoResolver {
  @Query(() => [Video])
  async videos() {
    const videos = await VideoSchema.find();
    return videos;
  }

  @Mutation(() => Video)
  async createVideos(@Arg('videoInput') videoInput: videoInput) {
    const video = await VideoSchema.create(videoInput)
    return video;
  }
}

export default VideoResolver;