import Vue from 'vue';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { DateTimePicker } from '@syncfusion/ej2-calendars';


export const properties: string[] = ['allowEdit', 'cssClass', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'isMultiSelection', 'locale', 'max', 'min', 'placeholder', 'readonly', 'showClearButton', 'showTodayButton', 'start', 'step', 'strictMode', 'timeFormat', 'value', 'values', 'weekNumber', 'width', 'zIndex', 'blur', 'change', 'close', 'created', 'destroyed', 'focus', 'navigated', 'open', 'renderDayCell'];
export const modelProps: string[] = ['value'];

/**
 * Represents the Essential JS 2 VueJS DateTimePicker Component.
 * ```html
 * <ejs-datetimepicker v-bind:value='dateTime'></ejs-datetimepicker>
 * ```
 */
@EJComponentDecorator({
    props: properties,
    model: {
        event: 'modelchanged'
    }
})
export class DateTimePickerComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new DateTimePicker({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        //this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        //this.ej2Instances.setProperties = this.setProperties;

        this.bindProperties();
    }
    public trigger(eventName: string, eventProp: {[key:string]:Object}): void {
        if (eventName === 'change' && this.models && (this.models.length !== 0)) {
            let key: string[] = this.models.toString().match(/checked|value/) || [];
            let propKey: string = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                (this as any).$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }            
    }

    public setProperties(prop: any, muteOnChange: boolean): void {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && (this.models.length !== 0)) {
            let keys: string[] = Object.keys(prop);
            let emitKeys: string[] = [];
            let emitFlag: boolean = false;
            keys.map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        emitKeys.push(key);
                        emitFlag = true;
                    }
                });
            });
            if (emitFlag) {
                emitKeys.map((propKey: string): void => {
                    this.$emit('update:' + propKey, prop[propKey]);
                })
            }
        }
    }

    public render(createElement: any) {
        return createElement('input', (this as any).$slots.default);
    }
    
    public addDate(dates: Object | Object[]): void {
        return this.ej2Instances.addDate(dates);
    }

    public createContent(): void {
        return this.ej2Instances.createContent();
    }

    public currentView(): string {
        return this.ej2Instances.currentView();
    }

    public focusIn(): void {
        return this.ej2Instances.focusIn();
    }

    public focusOut(): void {
        return this.ej2Instances.focusOut();
    }

    public hide(e?: Object | Object | Object): void {
        return this.ej2Instances.hide(e);
    }

    public navigateTo(view: Object, date: Object): void {
        return this.ej2Instances.navigateTo(view, date);
    }

    public removeDate(dates: Object | Object[]): void {
        return this.ej2Instances.removeDate(dates);
    }

    public show(type?: string, e?: Object | Object | Object): void {
        return this.ej2Instances.show(type, e);
    }

    public toggle(e?: Object): void {
        return this.ej2Instances.toggle(e);
    }
}

export const DateTimePickerPlugin = {
    name: 'ejs-datetimepicker',
    install(Vue: any) {
        Vue.component(DateTimePickerPlugin.name, DateTimePickerComponent);

    }
}
