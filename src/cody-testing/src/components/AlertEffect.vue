<template>
    <div>
        <!-- make dynamicClass function/design better in the morning -->
        <div class="alert padding-sm radius-md js-alert" :class="[dynamicClass(), visible]" role="alert">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <svg class="icon icon--sm alert__icon margin-right-xxs" viewBox="0 0 24 24" aria-hidden="true">
                      <path v-if=" alert === 'Info'" d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M14.658,18.284 c-0.661,0.26-2.952,1.354-4.272,0.191c-0.394-0.346-0.59-0.785-0.59-1.318c0-0.998,0.328-1.868,0.919-3.957 c0.104-0.395,0.231-0.907,0.231-1.313c0-0.701-0.266-0.887-0.987-0.887c-0.352,0-0.742,0.125-1.095,0.257l0.195-0.799 c0.787-0.32,1.775-0.71,2.621-0.71c1.269,0,2.203,0.633,2.203,1.837c0,0.347-0.06,0.955-0.186,1.375l-0.73,2.582 c-0.151,0.522-0.424,1.673-0.001,2.014c0.416,0.337,1.401,0.158,1.887-0.071L14.658,18.284z M13.452,8c-0.828,0-1.5-0.672-1.5-1.5 s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S14.28,8,13.452,8z"></path>
                      <path v-else-if=" alert === 'Success'" d="M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0ZM10,17.414,4.586,12,6,10.586l4,4,8-8L19.414,8Z"></path>
                      <path v-else-if=" alert === 'Error'" d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M13.645,5L13,14h-2l-0.608-9 H13.645z M12,20c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2c1.105,0,2,0.895,2,2C14,19.105,13.105,20,12,20z"></path>
                      <path v-else-if=" alert === 'Warning'" d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M13.645,5L13,14h-2l-0.608-9 H13.645z M12,20c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2c1.105,0,2,0.895,2,2C14,19.105,13.105,20,12,20z"></path>
                    </svg>

                    <p class="text-sm"><strong>Info:</strong> this is an info message. <a href="#0" class="color-inherit">Learn more</a></p>
                </div>
            
                <button class="reset alert__close-btn margin-left-sm js-alert__close-btn js-tab-focus" v-if="button === 'On'"  @click="visible=null, successAlertClosed(), errorAlertClosed(), warningAlertClosed()">
                    <svg class="icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <title>Close alert</title>
                        <line x1="3" y1="3" x2="17" y2="17" />
                        <line x1="17" y1="3" x2="3" y2="17" />
                    </svg>
                </button>
            </div>
        </div>


    <!-- comment out for later use
        <div class="x-nkq x-n_i x-lc x-wo js-alert" role="alert">
            <div class="alert alert--success padding-sm radius-md js-alert" :class="{'alert--is-visible': info}" role="alert">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                <svg class="icon icon--sm alert__icon margin-right-xxs" viewBox="0 0 24 24" aria-hidden="true">
                   <-- Question for later
                        Would it not be better to v-bind the d attribute and have it return the icon value based
                        on a conditional, rather than hard coding 4 <path> elemenets and showing one of them
                        based on a condition, would it make the compiling faster? ->
                    <path v-if=" icon === 'Info'" d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M14.658,18.284 c-0.661,0.26-2.952,1.354-4.272,0.191c-0.394-0.346-0.59-0.785-0.59-1.318c0-0.998,0.328-1.868,0.919-3.957 c0.104-0.395,0.231-0.907,0.231-1.313c0-0.701-0.266-0.887-0.987-0.887c-0.352,0-0.742,0.125-1.095,0.257l0.195-0.799 c0.787-0.32,1.775-0.71,2.621-0.71c1.269,0,2.203,0.633,2.203,1.837c0,0.347-0.06,0.955-0.186,1.375l-0.73,2.582 c-0.151,0.522-0.424,1.673-0.001,2.014c0.416,0.337,1.401,0.158,1.887-0.071L14.658,18.284z M13.452,8c-0.828,0-1.5-0.672-1.5-1.5 s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S14.28,8,13.452,8z"></path>
                    <path v-else-if=" icon === 'Success'" d="M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0ZM10,17.414,4.586,12,6,10.586l4,4,8-8L19.414,8Z"></path>
                    <path v-else-if=" icon === 'Error'" d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M13.645,5L13,14h-2l-0.608-9 H13.645z M12,20c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2c1.105,0,2,0.895,2,2C14,19.105,13.105,20,12,20z"></path>
                    <path v-else-if=" icon === 'Warning'" d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M13.645,5L13,14h-2l-0.608-9 H13.645z M12,20c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2c1.105,0,2,0.895,2,2C14,19.105,13.105,20,12,20z"></path>
                </svg>

                <slot></slot>
                </div>
            
                <button class="reset alert__close-btn margin-left-sm js-alert__close-btn js-tab-focus" @click="toggle=false">
                <svg class="icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <title>Close alert</title>
                    <line x1="3" y1="3" x2="17" y2="17" />
                    <line x1="17" y1="3" x2="3" y2="17" />
                </svg>
                </button>
            </div>
            </div>
        </div>
    -->
    </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
    name: "AlertEffect",
    props: {
        alert: {
          type: String
        },
        button: {
          type: String
        }
    },
    data() {
        return {
            visible: 'alert--is-visible'
        };
    },
    setup(props, {emit}) {
        const dynamicClass = ()=> {
            let className;
            if (props.alert === 'Success') {
             className = 'alert--success'
            }
            else if (props.alert === 'Error') {
             className = 'alert--error'
            }
            else if (props.alert === 'Warning') {
             className = 'alert--warning'
            }
            return className 
        }
        const successAlertClosed = () => {
          if (props.alert === 'Success'){
            emit('successAlertClosed');
          }
        }
        const errorAlertClosed = () => {
          if (props.alert === 'Error'){
            emit('errorAlertClosed');
          }
        }
        const warningAlertClosed = () => {
          if (props.alert === 'Warning'){
            emit('warningAlertClosed');
          }
        }
        return {dynamicClass, successAlertClosed, errorAlertClosed, warningAlertClosed}
    }
})

</script>

<style>

/* -------------------------------- 

File#: _1_alert
Title: Alert
Descr: Feedback message
Usage: codyhouse.co/license

-------------------------------- */

.alert {
  background-color: alpha(var(--color-primary), 0.2);
  color: var(--color-contrast-higher);

  /* hide element */
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
}

.alert__icon {
  color: var(--color-primary);
}

.alert__close-btn {
  display: inline-block;
  flex-shrink: 0;
  transition: .2s;

  .icon {
    display: block;
  }

  &:hover {
    opacity: 0.7;
  }
}

/* themes */
.alert--success {
  background-color: alpha(var(--color-success), 0.2);

  .alert__icon {
    color: var(--color-success);
  }
}

.alert--error {
  background-color: alpha(var(--color-error), 0.2);

  .alert__icon {
    color: var(--color-error);
  }
}

.alert--warning {
  background-color: alpha(var(--color-warning), 0.2);

  .alert__icon {
    color: var(--color-warning);
  }
}

/* toggle visibility */
.alert--is-visible {
  position: static;
  clip: auto;
  clip-path: none;
}

/* color blocks, not provided from cody source code
.x-nkq {
    background-color: hsla(var(--color-primary-h),var(--color-primary-s),var(--color-primary-l),0.2);
    color: var(--color-contrast-higher);
    clip: rect(1px,1px,1px,1px);
}

.x-n_i {
    position: static;
    clip: auto;
    clip-path: none;
}
.x-wo {
    border-radius: var(--radius-md);
}

.x-lc {
    padding: var(--space-sm);
}

*/

</style>