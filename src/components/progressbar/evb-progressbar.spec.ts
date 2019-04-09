import { EvbProgressBar } from "./evb-progressbar";

describe('EvbProgressBar', () => {
  let component: EvbProgressBar

  beforeEach(() => component = new EvbProgressBar());

  describe('progress', () => {

    it('should render', () => {
      expect(component.render()).toMatchSnapshot();
    })

    it('should have a default data-progress attribute on the host', () => {
      const hostData = component.hostData();
      expect(hostData["data-progress"]).toBe(0);
    });

    it('should have data-progress attribute on the host which reflects the progress', () => {
      component.progress = 88;
      const hostData = component.hostData();
      expect(hostData["data-progress"]).toBe(88);
    });
  })
})
