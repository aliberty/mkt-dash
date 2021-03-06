﻿/*!@license
* Infragistics.Web.ClientUI Editors localization resources 15.2.20152.1027
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Editor) {
	    $.ig.Editor = {
		    locale: {
			    spinUpperTitle: '増やす',
			    spinLowerTitle: '減らす',
			    buttonTitle: 'リストの表示',
			    clearTitle: '値をクリア',
			    datePickerButtonTitle: 'カレンダーの表示',
			    updateModeUnsupportedValue: 'updateMode に異なる構成を使用してください。値 "onChange" または "immediate" を選択してください。',
			    updateModeNotSupported: 'updateMode プロパティは、igMaskEditor、igDateEditor、および igDatePicker 拡張機能で "onchange" モードのみをサポートします。',
			    renderErrMsg: "ベース エディターは直接インスタンスを作成できません。テキスト、数値、日付、または他のエディターを試してください。",
			    multilineErrMsg: "textArea に異なる構成を使用してください。textMode は 'multiline' に設定してください。",
			    targetNotSupported: "ターゲット要素はサポートされていません。",
			    placeHolderNotSupported: "placeholder 属性はブラウザーでサポートされていません。",
			    allowedValuesMsg: "ドロップダウン リストから値を選択してください。",
			    maxLengthErrMsg: "入力は長すぎるため、{0} 文字にトリムされます。",
			    maxLengthWarningMsg: "入力値がこのフィールドの最大長さである {0} に達しました。",
			    minLengthErrMsg: "{0} 文字以上を入力する必要があります",
			    maxValErrMsg: "入力値がこのフィールドの最大値である {0} に達しました。",
			    minValErrMsg: "入力値がこのフィールドの最小値である {0} に達しました。",
			    maxValExceedRevertErrMsg: "入力値が最大値である {0} に達したため、以前の値に戻されました。",
			    minValExceedRevertErrMsg: "入力値が最小値である {0} に達したため、以前の値に戻されました。",
			    maxValExceededWrappedAroundErrMsg: "入力値が最大値である {0} に達したため、許可された最小値に設定されました。",
			    minValExceededWrappedAroundErrMsg: "入力値が最小値である {0} に達したため、許可された最大値に設定されました。",
			    btnValueNotSupported: '異なるボタン値が必要です。値 "dropdown"、"clear"、または "spin" を選択してください。',
			    scientificFormatErrMsg: '異なる scientificFormat が必要です。"E"、"e"、"E+"、または "e+" のいずれかを選択してください。',
			    spinDeltaIsOfTypeNumber: "異なる spinDelta タイプが必要です。正の数を入力してください。",
			    spinDeltaCouldntBeNegative: "指定した spinDelta オプションは負数にできません。正の数を入力してください。",
			    spinDeltaContainsExceedsMaxDecimals: "spinDelta に使用可能な最大フラクションは {0} に設定されています。MaxDecimals を変更するか値を小さくしてください。",
			    spinDeltaIncorrectFloatingPoint: '浮動小数点 spinDelta に異なる構成を使用してください。エディターの dataMode を "double" または "float" に設定してください。',
			    notEditableOptionByInit: "このオプションは初期化の後は編集できません。値は初期化後に設定してください。",
			    numericEditorNoSuchMethod: "数値エディターはこのメソッドをサポートしません。",
			    displayFactorIsOfTypeNumber: "displayFactor に異なる値を使用してください。値は数値として 1 または 100 に設定する必要があります。",
			    displayFactorAllowedValue: "displayFactor に異なる値を使用してください。値は数値として 1 または 100 に設定する必要があります。",
			    instantiateCheckBoxErrMsg: "igCheckboxEditor を指定した要素にインスタンス化できません。INPUT、SPAN、または DIV 要素を使用してください。",
			    cannotParseNonBoolValue: "igCheckboxEditor には異なる値を使用してください。ブール値を使用してください。",
			    cannotSetNonBoolValue: "igCheckboxEditor には異なる値を使用してください。ブール値を使用してください。",
			    maskEditorNoSuchMethod: "マスク エディターはこのメソッドをサポートしません。",
			    datePickerEditorNoSuchMethod: "日付エディターはこのメソッドをサポートしません。",
			    datePickerNoSuchMethodDropDownContainer: "日付エディターはこのメソッドをサポートしません。'getCalendar' メソッドを使用してください。",
			    buttonTypeIsDropDownOnly: "Datepicker の buttonType オプションの有効な値は dropdown および clear 値のみです。",
			    dateEditorMinValue: "MinValue オプションはランタイムに設定できません。",
			    dateEditorMaxValue: "MaxValue オプションはランタイムに設定できません。",
			    cannotSetRuntime: "このオプションはランタイムに設定できません。",
			    invalidDate: "無効な日付",
			    maskMessage: 'すべての必須文字を入力してください',
			    dateMessage: '有効な日付を入力してください',
			    centuryThresholdValidValues: "centuryThreshold プロパティは 0 ~ 99 である必要があります。値はデフォルトに戻されました。"
		    }
	    };
    }
})(jQuery);