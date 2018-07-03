import Animation from './lib/animation';
import AnimationGroup from './lib/animation-group/index';

const components = {
  Animation, AnimationGroup
};

components.install = Vue => {
  Vue.component(Animation.name, Animation);
  Vue.component(AnimationGroup.name, AnimationGroup);
};

export default components;