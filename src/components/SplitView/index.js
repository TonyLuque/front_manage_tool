/* eslint-disable react/jsx-pascal-case */
import { _Container, _LeftDiv, _RightDiv, _Video } from "./styles";

export const SplitView = ({ children }) => {
  return (
    <_Container>
      <_LeftDiv>{children}</_LeftDiv>
      <_RightDiv>
        <_Video autoplay muted loop>
          <source
            src="https://player.vimeo.com/external/342571552.hd.mp4?s=6aa6f164de3812abadff3dde86d19f7a074a8a66&profile_id=175&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </_Video>
      </_RightDiv>
    </_Container>
  );
};
