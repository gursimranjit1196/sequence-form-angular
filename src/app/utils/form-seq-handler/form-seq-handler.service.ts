import * as Constants from '../../constants'

export class FormSequenceHandler {

  constructor() {}

  static seriesFormLoad(componentFactoryResolver, formType, activeForm, containerRef) {
    const { fSeries, fEnum } = Constants.FORM_TYPES_SERIES_ENUM[Constants.FORM_TYPES[formType]]
    let componentFactory = componentFactoryResolver.resolveComponentFactory(fSeries[fEnum[activeForm]]);
    containerRef.clear();
    const componentRef = containerRef.createComponent(componentFactory);
    return { componentRef }
  }

}