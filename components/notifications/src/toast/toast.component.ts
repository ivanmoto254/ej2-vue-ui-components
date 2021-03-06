import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { Toast } from '@syncfusion/ej2-notifications';
import { ButtonModelPropDirective, ButtonModelPropsDirective, ButtonModelPropPlugin, ButtonModelPropsPlugin } from './buttons.directive'


export const properties: string[] = ['animation', 'buttons', 'content', 'cssClass', 'enablePersistence', 'enableRtl', 'extendedTimeout', 'height', 'icon', 'locale', 'newestOnTop', 'position', 'showCloseButton', 'showProgressBar', 'target', 'template', 'timeOut', 'title', 'width', 'beforeOpen', 'click', 'close', 'created', 'destroyed', 'open'];
export const modelProps: string[] = [];

/**
 * Represents the Vue Toast Component
 * ```html
 * <ejs-toast></ejs-toast>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class ToastComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {"e-buttonmodelprop":"e-buttonmodelprops"};
    public tagNameMapper: Object = {"e-buttonmodelprop":"e-buttons"};
    
    constructor() {
        super();
        this.ej2Instances = new Toast({});
        this.bindProperties();
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public hide(element?: Object | Object | string): void {
        return this.ej2Instances.hide(element);
    }

    public show(toastObj?: Object): void {
        return this.ej2Instances.show(toastObj);
    }
}

export const ToastPlugin = {
    name: 'ejs-toast',
    install(Vue: any) {
        Vue.component(ToastPlugin.name, ToastComponent);
        Vue.component(ButtonModelPropsPlugin.name, ButtonModelPropsDirective);
        Vue.component(ButtonModelPropPlugin.name, ButtonModelPropDirective);

    }
}
