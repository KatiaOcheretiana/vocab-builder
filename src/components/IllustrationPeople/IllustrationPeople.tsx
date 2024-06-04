import mob_1x from '../../assets/images/illustration_mob_1x.png';
import mob_2x from '../../assets/images/illustration_mob_2x.png';
import desk_1x from '../../assets/images/illustration_desk_1x.png';
import desk_2x from '../../assets/images/illustration_desk_2x.png';
import { Image } from './IllustrationPeople.styled';

export default function IllustrationPeople() {
  return (
    <picture>
      <source
        srcSet={`${mob_1x} 1x, ${mob_2x} 2x`}
        media="(max-width: 767px)"
      />
      <source
        srcSet={`${desk_1x} 1x, ${desk_2x} 2x`}
        media="(min-width: 768px)"
      />
      <Image src={mob_1x} alt="Illustration" loading="lazy" />
    </picture>
  );
}
