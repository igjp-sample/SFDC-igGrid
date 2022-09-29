import { LightningElement } from 'lwc';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import jqcore from '@salesforce/resourceUrl/jqcore';
import igjs from '@salesforce/resourceUrl/igjs';
import igcss from '@salesforce/resourceUrl/igcss';


export default class IgGridWebComponent extends LightningElement {

    jquery;

    northwindProducts = [
        { "ProductID": 1, "ProductName": "果汁100% オレンジ", "CategoryName": "飲料", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/1.png", "InStock": 39 },
        { "ProductID": 2, "ProductName": "果汁100% グレープ", "CategoryName": "飲料", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/1.png", "InStock": 17 },
        { "ProductID": 3, "ProductName": "ホワイトソルト", "CategoryName": "調味料", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/2.png", "InStock": 13 },
        { "ProductID": 4, "ProductName": "ブラックペッパー", "CategoryName": "調味料", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/2.png", "InStock": 53 },
        { "ProductID": 5, "ProductName": "ピュアシュガー", "CategoryName": "調味料", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/2.png", "InStock": 0 },
        { "ProductID": 6, "ProductName": "うまい素", "CategoryName": "調味料", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/2.png", "InStock": 120 },
        { "ProductID": 7, "ProductName": "乾燥バナナ", "CategoryName": "加工食品", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/7.png", "InStock": 15 },
        { "ProductID": 8, "ProductName": "ピュアデミグラスソース", "CategoryName": "調味料", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/2.png", "InStock": 6 },
        { "ProductID": 9, "ProductName": "アメリカンポーク", "CategoryName": "肉類", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/6.png", "InStock": 29 },
        { "ProductID": 10, "ProductName": "大陸サーモン", "CategoryName": "魚介類", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/8.png", "InStock": 31 },
        { "ProductID": 11, "ProductName": "ロッキーチーズ", "CategoryName": "乳製品", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/4.png", "InStock": 22 },
        { "ProductID": 12, "ProductName": "フレッシュバター", "CategoryName": "乳製品", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/4.png", "InStock": 86 },
        { "ProductID": 13, "ProductName": "うなぎ", "CategoryName": "魚介類", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/8.png", "InStock": 24 },
        { "ProductID": 14, "ProductName": "乾燥アップル", "CategoryName": "加工食品", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/7.png", "InStock": 35 },
        { "ProductID": 15, "ProductName": "だしかつお", "CategoryName": "調味料", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/2.png", "InStock": 39 },
        { "ProductID": 16, "ProductName": "バニラクリームアイス", "CategoryName": "菓子類", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/3.png", "InStock": 29 },
        { "ProductID": 17, "ProductName": "うす味ウインナー", "CategoryName": "肉類", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/6.png", "InStock": 0 },
        { "ProductID": 18, "ProductName": "かに", "CategoryName": "魚介類", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/8.png", "InStock": 42 },
        { "ProductID": 19, "ProductName": "チョコクリームアイス", "CategoryName": "菓子類", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/3.png", "InStock": 25 },
        { "ProductID": 20, "ProductName": "紅茶バー", "CategoryName": "菓子類", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/3.png", "InStock": 40 },
        { "ProductID": 21, "ProductName": "じゃがチップス", "CategoryName": "菓子類", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/3.png", "InStock": 3 },
        { "ProductID": 22, "ProductName": "モーニングブレッド", "CategoryName": "穀類、シリアル", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/5.png", "InStock": 104 },
        { "ProductID": 23, "ProductName": "バタートースト", "CategoryName": "穀類、シリアル", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/5.png", "InStock": 61 },
        { "ProductID": 24, "ProductName": "コーヒーマイルド", "CategoryName": "飲料", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/1.png", "InStock": 20 },
        { "ProductID": 25, "ProductName": "アメリカンクラッカー", "CategoryName": "菓子類", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/3.png", "InStock": 76 },
        { "ProductID": 26, "ProductName": "バナナキャンディー", "CategoryName": "菓子類", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/3.png", "InStock": 15 },
        { "ProductID": 27, "ProductName": "メロンミルクキャンディー", "CategoryName": "菓子類", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/3.png", "InStock": 49 },
        { "ProductID": 28, "ProductName": "特選味のり", "CategoryName": "加工食品", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/7.png", "InStock": 26 },
        { "ProductID": 29, "ProductName": "ベターローストハム", "CategoryName": "肉類", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/6.png", "InStock": 0 },
        { "ProductID": 30, "ProductName": "いくら", "CategoryName": "魚介類", "ImageUrl": "https://jp.igniteui.com/images/samples/nw/categories/8.png", "InStock": 10 }
    ]

    renderedCallback() {
        if (this.appInitialized) {
            return;
        }
        this.appInitialized = true;
        Promise.all([
            loadStyle(this, igcss + '/infragistics.theme.css'),
            loadStyle(this, igcss + '/infragistics.css'),
            loadScript(this, jqcore + '/jquery-3.6.1.min.js'),
            loadScript(this, jqcore + '/jquery-ui.min.js'),
            loadScript(this, igjs + '/infragistics.core.js'),
            loadScript(this, igjs + '/infragistics.lob.js'),
        ])
        .then(() => {
            console.log("loaded libraries");
            console.log($.ig);
            for (var i = 0; i < this.northwindProducts.length; i++) {
                this.northwindProducts[i].ImageUrl = "https://jp.igniteui.com/images/samples/grid/" + (i % 10) + ".jpg";
            }
            $(this.template.querySelector(".igGrid")).igGrid({
                primaryKey: "ProductID",
                caption : "<span> <img src=\"//www.infragistics.com/media/441501/horz_logo.png\" alt=\"Infragistics\"></span>",
                width: '100%',
                columns: [
                    { headerText: "製品 ID", key: "ProductID", dataType: "number", width: "15%", hidden: true },
                    { headerText: "画像", key: "ImageUrl", dataType: "string", width: "15%", template: "<img style=\"height:50px;\" src=\"${ImageUrl}\"/>" },
                    { headerText: "製品名", key: "ProductName", dataType: "string", width: "25%" },
                    { headerText: "カテゴリ", key: "CategoryName", dataType: "string", width: "25%" },
                    { headerText: "在庫数", key: "InStock", dataType: "number", width: "35%" }
                ],
                autofitLastColumn: false,
                autoGenerateColumns: false,
                dataSource: this.northwindProducts,
                autoCommit: true,
                features: [
                    {
                        name: "Sorting",
                        sortingDialogContainment: "window"
                    },
                    {
                        name: "Filtering",
                        type: "local",
                        columnSettings: [
                            {
                                columnKey: "ImageUrl",
                                allowFiltering: false
                            },
                            {
                                columnKey: "InStock",
                                condition: "greaterThan"
                            }
                        ]
                    },
                    {
                        name: "GroupBy",
                        columnSettings: [
                            {
                                columnKey: "CategoryName",
                                isGroupBy: true
                            }
                        ]
                    },
                    {
                        name: "Selection"
                    },
                    {
                        name: "Paging",
                        pageSize: 10
                    },
                    {
                        name: "Resizing"
                    },
                    {
                        name: "Updating",
                        editMode: "dialog",
                        enableAddRow: false,
                        columnSettings: [
                            {
                                columnKey: "ImageUrl",
                                readOnly: false
                            }
                        ]
                    }
                ]
            });
        })
        .catch(e => {
            console.log(e)
        });
    }

}