/*!
 * 
 * (C) Copyright IBM Corp. 2017 - 2019. All Rights Reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 * 
 * watson-web-channel 0.1.2
 * Contributors: Ethan Winters, Raymond Chu, Karen Harris, Ashley Lord, Amy Zhong, Ryan Simpson, Anthony Wong, Wilson Wong, David G Terry, Simon Burns, Damon Lundin, John Engstrom, Neil Mallinar
 * Built: Sep 12 2019 2:03 pm +00:00
 * 
 * 
 */
(window.webpackJsonpWatsonAssistantChat=window.webpackJsonpWatsonAssistantChat||[]).push([[49],{935:function(t,s,a){"use strict";a.r(s),s.default='.WACContainer,:root{--WatsonAssistantChat-BASE-accent-color:#0062ff;--WatsonAssistantChat-BASE-accent-secondary-color:#0353e9;--WatsonAssistantChat-BASE-background-color:#f3f3f3;--WatsonAssistantChat-BASE-font-color:#171717;--WatsonAssistantChat-BASE-primary-color:#3d3d3d;--WatsonAssistantChat-BASE-secondary-color:#fff;--WatsonAssistantChat-BASE-tertiary-color:#dcdcdc;--WatsonAssistantChat-BASE-quaternary-color:#bfbfbf;--WatsonAssistantChat-BASE-quinary-color:#4c4c4c;--WatsonAssistantChat-BASE-inactive-text:#6f6f6f;--WatsonAssistantChat-INPUT-inactive-font-color:#8c8c8c;--WatsonAssistantChat-LINK-color:#0062ff;--WatsonAssistantChat-BASE-small-spacing:4px;--WatsonAssistantChat-BASE-med-spacing:8px;--WatsonAssistantChat-BASE-large-spacing:16px;--WatsonAssistantChat-BASE-xlarge-spacing:32px;--WatsonAssistantChat-BASE-xxlarge-spacing:48px;--WatsonAssistantChat-BASE-animation-time:0.3s;--WatsonAssistantChat-BASE-font-family:"IBM Plex Sans","Helvetica Neue",Arial,sans-serif;--WatsonAssistantChat-BASE-extra-small-font-size:8px;--WatsonAssistantChat-BASE-small-font-size:12px;--WatsonAssistantChat-BASE-med-font-size:14px;--WatsonAssistantChat-BASE-large-font-size:16px;--WatsonAssistantChat-BASE-small-line-height:16px;--WatsonAssistantChat-BASE-med-line-height:18px;--WatsonAssistantChat-BASE-large-line-height:24px;--WatsonAssistantChat-BASE-semibold-weight:600;--WatsonAssistantChat-BASE-xsmall-border-radius:var(--WatsonAssistantChat-BASE-med-border-width);--WatsonAssistantChat-BASE-small-border-radius:5px;--WatsonAssistantChat-BASE-med-border-radius:8px;--WatsonAssistantChat-BASE-large-border-radius:12px;--WatsonAssistantChat-BASE-small-border-width:1px;--WatsonAssistantChat-BASE-med-border-width:2px;--WatsonAssistantChat-BASE-focus-border-width:var(--WatsonAssistantChat-BASE-med-border-width);--WatsonAssistantChat-BASE-focus-border-style:solid;--WatsonAssistantChat-BASE-bottom-position:32px;--WatsonAssistantChat-BASE-box-shadow:1px 0 6px hsla(0,0%,9%,0.3);--WatsonAssistantChat-BASE-height:512px;--WatsonAssistantChat-BASE-min-height:var(--WatsonAssistantChat-BASE-height);--WatsonAssistantChat-BASE-right-position:var(--WatsonAssistantChat-BASE-xlarge-spacing);--WatsonAssistantChat-BASE-width:320px;--WatsonAssistantChat-BASE-z-index:8000;--WatsonAssistantChat-BUTTON-active-background-color:var(--WatsonAssistantChat-BASE-primary-color);--WatsonAssistantChat-BUTTON-active-font-color:var(--WatsonAssistantChat-BASE-secondary-color);--WatsonAssistantChat-BUTTON-background-color:var(--WatsonAssistantChat-BASE-tertiary-color);--WatsonAssistantChat-BUTTON-background-color-hover:var(--WatsonAssistantChat-BASE-quaternary-color);--WatsonAssistantChat-BUTTON-border-radius:16px;--WatsonAssistantChat-BUTTON-border-size:var(--WatsonAssistantChat-BASE-med-border-width);--WatsonAssistantChat-BUTTON-font-align:left;--WatsonAssistantChat-BUTTON-font-color:var(--WatsonAssistantChat-BASE-font-color);--WatsonAssistantChat-BUTTON-font-size:var(--WatsonAssistantChat-BASE-small-font-size);--WatsonAssistantChat-BUTTON-line-height:var(--WatsonAssistantChat-BASE-small-line-height);--WatsonAssistantChat-BUTTON-margin-bottom:var(--WatsonAssistantChat-BASE-large-spacing);--WatsonAssistantChat-BUTTON-padding-top-bottom:var(--WatsonAssistantChat-BASE-small-spacing);--WatsonAssistantChat-BUTTON-padding-right-left:8px;--WatsonAssistantChat-BUTTON-max-width:calc(200px - var(--WatsonAssistantChat-BUTTON-padding-right-left) - var(--WatsonAssistantChat-BUTTON-padding-right-left));--WatsonAssistantChat-HEADER-background-color:var(--WatsonAssistantChat-BASE-secondary-color);--WatsonAssistantChat-HEADER-color:var(--WatsonAssistantChat-BASE-font-color);--WatsonAssistantChat-HEADER-font-size:var(--WatsonAssistantChat-BASE-large-font-size);--WatsonAssistantChat-HEADER-font-weight:600;--WatsonAssistantChat-HEADER-height:49px;--WatsonAssistantChat-HEADER-line-height:var(--WatsonAssistantChat-BASE-med-line-height);--WatsonAssistantChat-HEADER-icon-height:20px;--WatsonAssistantChat-HEADER-icon-width:20px;--WatsonAssistantChat-HEADER-padding:14px 12px 14px var(--WatsonAssistantChat-BASE-large-spacing);--WatsonAssistantChat-HEADER-button-opacity-hover:0.8;--WatsonAssistantChat-LAUNCHER-active-outline-color:var(--WatsonAssistantChat-BASE-secondary-color);--WatsonAssistantChat-LAUNCHER-active-background-color:var(--WatsonAssistantChat-BASE-accent-secondary-color);--WatsonAssistantChat-LAUNCHER-background-color:var(--WatsonAssistantChat-BASE-accent-color);--WatsonAssistantChat-LAUNCHER-button-padding-top-bottom:var(--WatsonAssistantChat-BASE-large-spacing);--WatsonAssistantChat-LAUNCHER-button-padding-right-left:14px;--WatsonAssistantChat-LAUNCHER-height:56px;--WatsonAssistantChat-LAUNCHER-hover-background-color:var(--WatsonAssistantChat-BASE-accent-secondary-color);--WatsonAssistantChat-LAUNCHER-icon-color:var(--WatsonAssistantChat-BASE-secondary-color);--WatsonAssistantChat-LAUNCHER-position-bottom:var(--WatsonAssistantChat-BASE-xlarge-spacing);--WatsonAssistantChat-LAUNCHER-position-right:var(--WatsonAssistantChat-BASE-xlarge-spacing);--WatsonAssistantChat-LAUNCHER-svg-color:var(--WatsonAssistantChat-BASE-secondary-color);--WatsonAssistantChat-LAUNCHER-width:56px;--WatsonAssistantChat-LAUNCHER-icon-width:28px;--WatsonAssistantChat-LAUNCHER-icon-height:26px;--WatsonAssistantChat-INPUT-active-font-color:var(--WatsonAssistantChat-BASE-font-color);--WatsonAssistantChat-INPUT-background-color:var(--WatsonAssistantChat-BASE-secondary-color);--WatsonAssistantChat-INPUT-border-color:var(--WatsonAssistantChat-BASE-tertiary-color);--WatsonAssistantChat-INPUT-border-top:var(--WatsonAssistantChat-BASE-small-border-width) solid var(--WatsonAssistantChat-INPUT-border-color);--WatsonAssistantChat-INPUT-font-color:var(--WatsonAssistantChat-BASE-font-color);--WatsonAssistantChat-INPUT-font-family:var(--WatsonAssistantChat-BASE-font-family);--WatsonAssistantChat-INPUT-font-size:var(--WatsonAssistantChat-BASE-med-font-size);--WatsonAssistantChat-INPUT-height:48px;--WatsonAssistantChat-INPUT-icon-color:var(--WatsonAssistantChat-BASE-accent-color);--WatsonAssistantChat-INPUT-line-height:var(--WatsonAssistantChat-BASE-med-line-height);--WatsonAssistantChat-INPUT-min-height:0;--WatsonAssistantChat-INPUT-padding-right-left:var(--WatsonAssistantChat-BASE-large-spacing);--WatsonAssistantChat-INPUT-padding-top-bottom:12px;--WatsonAssistantChat-SEND-button-width:18px;--WatsonAssistantChat-SEND-button-height:18px;--WatsonAssistantChat-SEND-button-padding-top-bottom:12px;--WatsonAssistantChat-SEND-button-padding-right-left:12px;--WatsonAssistantChat-SEND-button-border-active:1px;--WatsonAssistantChat-SEND-button-background:var(--WatsonAssistantChat-INPUT-background-color);--WatsonAssistantChat-SEND-button-border:solid var(--WatsonAssistantChat-BASE-med-border-width) var(--WatsonAssistantChat-BASE-secondary-color);--WatsonAssistantChat-SEND-icon-fill:var(--WatsonAssistantChat-BASE-secondary-color);--WatsonAssistantChat-SEND-icon-fill-disabled:var(--WatsonAssistantChat-INPUT-inactive-font-color);--WatsonAssistantChat-SEND-button-animation-fade-id-arrow:WatsonAssistantChat_SendButtonFadeInArrow var(--WatsonAssistantChat-BASE-animation-time);--WatsonAssistantChat__button--base-animation-fade-in:WatsonAssistantChat_SendButtonFadeIn var(--WatsonAssistantChat-BASE-animation-time);--WatsonAssistantChat__button--base-opacity-enabled:0.8;--WatsonAssistantChat__button--base-animation-fade-out:WatsonAssistantChat_SendButtonFadeOut var(--WatsonAssistantChat-BASE-animation-time);--WatsonAssistantChat__button--primary-background-disabled:var(--WatsonAssistantChat-BASE-secondary-color);--WatsonAssistantChat__button--primary-border-disabled:var(--WatsonAssistantChat-BASE-focus-border-width) var(--WatsonAssistantChat-BASE-focus-border-style) var(--WatsonAssistantChat-BASE-secondary-color);--WatsonAssistantChat__button--primary-box-shadow-focus:inset 0 0 0 var(--WatsonAssistantChat-SEND-button-border-active) var(--WatsonAssistantChat-BASE-secondary-color);--WatsonAssistantChat__button--primary-background-enabled:var(--WatsonAssistantChat-BASE-accent-color);--WatsonAssistantChat__button--primary-border-enabled:var(--WatsonAssistantChat-BASE-focus-border-width) var(--WatsonAssistantChat-BASE-focus-border-style) var(--WatsonAssistantChat-BASE-accent-color);--WatsonAssistantChat__button--primary-active-border-enabled:var(--WatsonAssistantChat-BASE-accent-color);--WatsonAssistantChat__button--primary-box-shadow-enabled:inset 0 0 0 var(--WatsonAssistantChat-SEND-button-border-active) var(--WatsonAssistantChat-BASE-secondary-color);--WatsonAssistantChat__button--primary-color:var(--WatsonAssistantChat-BASE-secondary-color);--WatsonAssistantChat__button--primary-background-enabled-hover:var(--WatsonAssistantChat-BASE-accent-secondary-color);--WatsonAssistantChat__button--primary-border-enabled-hover:solid var(--WatsonAssistantChat-BASE-med-border-width) var(--WatsonAssistantChat-BASE-accent-color);--WatsonAssistantChat__button--ghost-background-disabled:var(--WatsonAssistantChat-BASE-secondary-color);--WatsonAssistantChat__button--ghost-border-disabled:var(--WatsonAssistantChat-BASE-focus-border-width) var(--WatsonAssistantChat-BASE-focus-border-style) var(--WatsonAssistantChat-BASE-secondary-color);--WatsonAssistantChat__button--ghost-border-focus:var(--WatsonAssistantChat-BASE-focus-border-width) var(--WatsonAssistantChat-BASE-focus-border-style) var(--WatsonAssistantChat-BASE-accent-color);--WatsonAssistantChat__button--ghost-background-enabled:var(--WatsonAssistantChat-BASE-secondary-color);--WatsonAssistantChat__button--ghost-border-enabled:var(--WatsonAssistantChat-BASE-focus-border-width) var(--WatsonAssistantChat-BASE-focus-border-style) transparent;--WatsonAssistantChat__button--ghost-active-border-enabled:transparent;--WatsonAssistantChat__button--ghost-box-shadow-enabled:none;--WatsonAssistantChat__button--ghost-color:var(--WatsonAssistantChat-BASE-accent-color);--WatsonAssistantChat__button--ghost-background-enabled-hover:var(--WatsonAssistantChat-BASE-tertiary-color);--WatsonAssistantChat__button--ghost-border-enabled-hover:solid var(--WatsonAssistantChat-BASE-med-border-width) transparent;--WatsonAssistantChat-MESSAGE-bar-background-color:var(--WatsonAssistantChat-BASE-accent-color);--WatsonAssistantChat-MESSAGE-bar-border-radius:var(--WatsonAssistantChat-BASE-xsmall-border-radius);--WatsonAssistantChat-MESSAGE-bar-height:16px;--WatsonAssistantChat-MESSAGE-bar-margin-right:8px;--WatsonAssistantChat-MESSAGE-bar-width:3px;--WatsonAssistantChat-MESSAGE-padding-bottom:4px;--WatsonAssistantChat-MESSAGE-margin:var(--WatsonAssistantChat-BASE-large-spacing);--WatsonAssistantChat-MESSAGE-first-margin-top:var(--WatsonAssistantChat-BASE-xlarge-spacing);--WatsonAssistantChat-MESSAGE-font-size:var(--WatsonAssistantChat-BASE-med-font-size);--WatsonAssistantChat-MESSAGE-letter-spacing:0.16px;--WatsonAssistantChat-MESSAGE-last-margin-bottom:var(--WatsonAssistantChat-BASE-xlarge-spacing);--WatsonAssistantChat-MESSAGE-line-height:var(--WatsonAssistantChat-BASE-med-line-height);--WatsonAssistantChat-MESSAGE-title-line-height:var(--WatsonAssistantChat-BASE-med-line-height);--WatsonAssistantChat-MESSAGE-title-margin-bottom-offset:-1px;--WatsonAssistantChat-MESSAGE-received-background-color:var(--WatsonAssistantChat-BASE-secondary-color);--WatsonAssistantChat-MESSAGE-received-font-color:var(--WatsonAssistantChat-BASE-font-color);--WatsonAssistantChat-MESSAGE-received-margin:var(--WatsonAssistantChat-BASE-med-spacing) var(--WatsonAssistantChat-BASE-large-spacing);--WatsonAssistantChat-MESSAGE-received-max-width:calc(100% - var(--WatsonAssistantChat-MESSAGE-bar-width) - var(--WatsonAssistantChat-MESSAGE-bar-margin-right) - 4px);--WatsonAssistantChat-MESSAGE-sent-background-color:var(--WatsonAssistantChat-BASE-primary-color);--WatsonAssistantChat-MESSAGE-sent-border-radius:var(--WatsonAssistantChat-BASE-med-border-radius) var(--WatsonAssistantChat-BASE-med-border-radius) 0 var(--WatsonAssistantChat-BASE-med-border-radius);--WatsonAssistantChat-MESSAGE-sent-font-color:var(--WatsonAssistantChat-BASE-secondary-color);--WatsonAssistantChat-MESSAGE-sent-max-width:75%;--WatsonAssistantChat-MESSAGE-sent-padding-top-bottom:8px;--WatsonAssistantChat-MESSAGE-sent-padding-right-left:12px;--WatsonAssistantChat-MESSAGE-sent-margin-bottom:var(--WatsonAssistantChat-BASE-large-spacing);--WatsonAssistantChat-MESSAGE-sent-tooltip-size:8px;--WatsonAssistantChat-MESSAGE-sent-tooltip-border-left:var(--WatsonAssistantChat-MESSAGE-sent-tooltip-size) solid transparent;--WatsonAssistantChat-MESSAGE-sent-tooltip-border-top:var(--WatsonAssistantChat-MESSAGE-sent-tooltip-size) solid var(--WatsonAssistantChat-MESSAGE-sent-background-color);--WatsonAssistantChat-MESSAGE-sent-tooltip-bottom-position:-8px;--WatsonAssistantChat-MESSAGE-sent-tooltip-right-position:0px;--WatsonAssistantChat-MESSAGE-inlineError-icon-radius:16px;--WatsonAssistantChat-SEARCH-border-radius:var(--WatsonAssistantChat-BASE-med-border-radius);--WatsonAssistantChat-SEARCH-padding-top-bottom:16px;--WatsonAssistantChat-SEARCH-padding-left-right:16px;--WatsonAssistantChat-SEARCH-received-box-shadow:none;--WatsonAssistantChat-METABLOCK-description-margin-top:var(--WatsonAssistantChat-BASE-med-spacing);--WatsonAssistantChat-IMAGE-description-loading-height:var(--WatsonAssistantChat-IMAGE-text-loading-height);--WatsonAssistantChat-IMAGE-description-loading-width:80%;--WatsonAssistantChat-IMAGE-font-size:var(--WatsonAssistantChat-BASE-med-font-size);--WatsonAssistantChat-IMAGE-holder-border-radius:var(--WatsonAssistantChat-BASE-small-border-radius);--WatsonAssistantChat-IMAGE-loading-background-color:var(--WatsonAssistantChat-BASE-accent-color);--WatsonAssistantChat-IMAGE-loading-fill-color:var(--WatsonAssistantChat-BASE-secondary-color);--WatsonAssistantChat-IMAGE-loading-max-height:200px;--WatsonAssistantChat-IMAGE-line-height:var(--WatsonAssistantChat-BASE-med-line-height);--WatsonAssistantChat-IMAGE-margin:var(--WatsonAssistantChat-MESSAGE-received-margin);--WatsonAssistantChat-IMAGE-no-text-border-radius:var(--WatsonAssistantChat-BASE-small-border-radius);--WatsonAssistantChat-IMAGE-padding:var(--WatsonAssistantChat-BASE-large-spacing);--WatsonAssistantChat-IMAGE-text-border-radius:var(--WatsonAssistantChat-BASE-small-border-radius) var(--WatsonAssistantChat-BASE-small-border-radius) 0 0;--WatsonAssistantChat-IMAGE-text-holder-background-color:var(--WatsonAssistantChat-BASE-secondary-color);--WatsonAssistantChat-IMAGE-text-holder-border-radius:0 0 var(--WatsonAssistantChat-BASE-small-border-radius) var(--WatsonAssistantChat-BASE-small-border-radius);--WatsonAssistantChat-IMAGE-text-loading-height:10px;--WatsonAssistantChat-IMAGE-text-margin:2px;--WatsonAssistantChat-IMAGE-title-font-weight:600;--WatsonAssistantChat-IMAGE-title-loading-height:var(--WatsonAssistantChat-IMAGE-text-loading-height);--WatsonAssistantChat-IMAGE-title-loading-width:90%;--WatsonAssistantChat-DROPDOWN-arrow-color:var(--WatsonAssistantChat-BASE-font-color);--WatsonAssistantChat-DROPDOWN-arrow-height:6px;--WatsonAssistantChat-DROPDOWN-arrow-width:12px;--WatsonAssistantChat-DROPDOWN-border-radius:var(--WatsonAssistantChat-BASE-small-border-radius);--WatsonAssistantChat-DROPDOWN-data-border-radius:0 0 var(--WatsonAssistantChat-DROPDOWN-border-radius) var(--WatsonAssistantChat-DROPDOWN-border-radius);--WatsonAssistantChat-DROPDOWN-toggle-focus-border-width:var(--WatsonAssistantChat-BASE-focus-border-width);--WatsonAssistantChat-DROPDOWN-toggle-focus-border-style:var(--WatsonAssistantChat-BASE-focus-border-style);--WatsonAssistantChat-DROPDOWN-toggle-focus-border-color:var(--WatsonAssistantChat-BASE-accent-color);--WatsonAssistantChat-DROPDOWN-toggle-background-color:var(--WatsonAssistantChat-BASE-secondary-color);--WatsonAssistantChat-DROPDOWN-toggle-highlight-color:var(--WatsonAssistantChat-BASE-tertiary-color);--WatsonAssistantChat-DROPDOWN-item-highlighted-background-color:var(--WatsonAssistantChat-BASE-tertiary-color);--WatsonAssistantChat-DROPDOWN-item-highlighted-font-color:var(--WatsonAssistantChat-BASE-font-color);--WatsonAssistantChat-DROPDOWN-item-selected-background-color:var(--WatsonAssistantChat-BASE-tertiary-color);--WatsonAssistantChat-DROPDOWN-item-selected-font-color:var(--WatsonAssistantChat-BASE-font-color);--WatsonAssistantChat-DROPDOWN-item-background-color:var(--WatsonAssistantChat-BASE-secondary-color);--WatsonAssistantChat-DROPDOWN-item-border-width:var(--WatsonAssistantChat-BASE-small-border-width);--WatsonAssistantChat-DROPDOWN-item-border-color:var(--WatsonAssistantChat-BASE-tertiary-color);--WatsonAssistantChat-DROPDOWN-item-font-color:var(--WatsonAssistantChat-BASE-font-color);--WatsonAssistantChat-DROPDOWN-item-font-size:var(--WatsonAssistantChat-BASE-med-font-size);--WatsonAssistantChat-DROPDOWN-item-line-height:var(--WatsonAssistantChat-BASE-med-line-height);--WatsonAssistantChat-DROPDOWN-item-margin-right-left:var(--WatsonAssistantChat-BASE-large-spacing);--WatsonAssistantChat-DROPDOWN-item-padding-top-bottom:12px;--WatsonAssistantChat-DROPDOWN-item-padding-right-left:var(--WatsonAssistantChat-BASE-large-spacing);--WatsonAssistantChat-DROPDOWN-max-height:240px;--WatsonAssistantChat-DROPDOWN-right-position:var(--WatsonAssistantChat-BASE-med-spacing);--WatsonAssistantChat-DROPDOWN-title-border-radius:var(--WatsonAssistantChat-DROPDOWN-border-radius) var(--WatsonAssistantChat-DROPDOWN-border-radius) 0 0;--WatsonAssistantChat-OPTIONS-holder-margin:var(--WatsonAssistantChat-BASE-small-line-height);--WatsonAssistantChat-OPTIONS-holder-max-width:var(--WatsonAssistantChat-MESSAGE-received-max-width);--WatsonAssistantChat-OPTIONS-holder-margin-top:var(--WatsonAssistantChat-BASE-large-spacing);--WatsonAssistantChat-AGENT-title-padding:0 0 2px 0;--WatsonAssistantChat-AGENT-description-padding:0 0 60px 0;--WatsonAssistantChat-AGENT-preview-description-padding:0;--WatsonAssistantChat-AGENT-end-chat-container-height:60px;--WatsonAssistantChat-AGENT-agent-online-color:#7ed321;--WatsonAssistantChat-AGENT-agent-offline-color:var(--WatsonAssistantChat-BASE-tertiary-color)}@media screen and (max-width:500px){.WACContainer,:root{--WatsonAssistantChat-LAUNCHER-width:48px;--WatsonAssistantChat-LAUNCHER-height:48px;--WatsonAssistantChat-LAUNCHER-icon-width:21px;--WatsonAssistantChat-LAUNCHER-icon-height:21px;--WatsonAssistantChat-LAUNCHER-position-bottom:18px;--WatsonAssistantChat-LAUNCHER-button-padding-top-bottom:14px;--WatsonAssistantChat-LAUNCHER-button-padding-right-left:10px;--WatsonAssistantChat-BASE-height:100vh;--WatsonAssistantChat-BASE-min-height:var(--WWX-BASE-height);--WatsonAssistantChat-BASE-width:100%;--WatsonAssistantChat-BASE-right-position:auto}}@media screen and (max-width:380px){.WACContainer,:root{--WatsonAssistantChat-MESSAGE-font-size:16px;--WatsonAssistantChat-MESSAGE-line-height:20px;--WatsonAssistantChat-BASE-large-font-size:18px;--WatsonAssistantChat-BASE-med-line-height:20px;--WatsonAssistantChat-HEADER-icon-width:24px;--WatsonAssistantChat-HEADER-icon-height:24px;--WatsonAssistantChat-INPUT-padding-top-bottom:11px;--WatsonAssistantChat-INPUT-padding-right-left:16px;--WatsonAssistantChat-INPUT-font-size:16px;--WatsonAssistantChat-INPUT-line-height:20px;--WatsonAssistantChat-BUTTON-font-size:14px;--WatsonAssistantChat-BUTTON-line-height:20px;--WatsonAssistantChat-BUTTON-padding-right-left:10px;--WatsonAssistantChat-IMAGE-font-size:16px;--WatsonAssistantChat-IMAGE-line-height:20px;--WatsonAssistantChat-MESSAGE-inlineError-icon-radius:18px}.WACWidget .WAC__header-closeSVG{margin-top:-2px;margin-right:-1px}.WACWidget .WAC__received--text,.WACWidget .WAC__title{margin-top:-2px}}@media screen and (min-width:380px) and (max-width:500px){.WACContainer,:root{--WatsonAssistantChat-HEADER-height:53px;--WatsonAssistantChat-MESSAGE-font-size:18px;--WatsonAssistantChat-MESSAGE-line-height:24px;--WatsonAssistantChat-BASE-large-font-size:20px;--WatsonAssistantChat-BASE-med-line-height:22px;--WatsonAssistantChat-HEADER-icon-width:32px;--WatsonAssistantChat-HEADER-icon-height:32px;--WatsonAssistantChat-INPUT-padding-top-bottom:11px;--WatsonAssistantChat-INPUT-padding-right-left:14px;--WatsonAssistantChat-INPUT-font-size:18px;--WatsonAssistantChat-INPUT-line-height:25px;--WatsonAssistantChat-BUTTON-font-size:18px;--WatsonAssistantChat-BUTTON-line-height:24px;--WatsonAssistantChat-BUTTON-padding-right-left:14px;--WatsonAssistantChat-BUTTON-border-radius:18px;--WatsonAssistantChat-IMAGE-font-size:18px;--WatsonAssistantChat-IMAGE-line-height:24px;--WatsonAssistantChat-MESSAGE-inlineError-icon-radius:18px;--WatsonAssistantChat-HEADER-padding:15px 12px 15px var(--WatsonAssistantChat-BASE-large-spacing);--WatsonAssistantChat-INPUT-min-height:52px;--WatsonAssistantChat-MESSAGE-sent-tooltip-size:10px;--WatsonAssistantChat-MESSAGE-sent-tooltip-border-left:var(--WatsonAssistantChat-MESSAGE-sent-tooltip-size) solid transparent;--WatsonAssistantChat-MESSAGE-sent-tooltip-border-top:var(--WatsonAssistantChat-MESSAGE-sent-tooltip-size) solid var(--WatsonAssistantChat-MESSAGE-sent-background-color);--WatsonAssistantChat-MESSAGE-sent-tooltip-bottom-position:-10px;--WatsonAssistantChat-MESSAGE-bar-height:21px}.WACWidget .WAC__header-closeSVG{margin-top:-5px;margin-right:-2px}.WACWidget .WAC__received--text,.WACWidget .WAC__title{margin-top:-1px}}'}}]);