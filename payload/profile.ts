import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/sample_tux.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '최연정',
    small: '(Choi, Yeon Jeong)',
  },
  contact: [
    {
      title: 'bisionary04@gmail.com',
      link: 'mailto:bisionary04@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '메일로 연락 주세요.',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/yjeongs22/resume-nextjs',
      icon: faGithub,
    },
  ],
  notice: {
    title:
      '아직 배재대학교에 재학 중입니다. 졸업은 2027년 2월입니다. 졸업 전까지는 인턴으로만 근무가 가능합니다.',
    icon: faBell,
  },
};

export default profile;
