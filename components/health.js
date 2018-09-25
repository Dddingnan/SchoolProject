import React, { Component } from 'react';
import {
    StyleSheet,
    ListView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Linking
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

let sourceData = [
  {group: '何謂大腸癌'},
  {name: '第零期',des:'一般所言的大腸直腸癌是指最常見的大腸直腸腺癌，乃是由腸粘膜細胞突然不受控制的增生。細胞變得奇形怪狀、不規則排列並向週邊組織侵犯，甚至向身體各處轉移，造成腸道出血、阻塞、並耗盡正常組織。', group: '何謂大腸癌'},


   {group: '大腸癌概況'},
   {name: '第零期',des:'大腸癌為國人發生人數最多的癌症，且每年呈快速增加的趨勢，每年約有1萬多人得到大腸癌，並有超過5千人因大腸癌死亡。\n早期發現早期治療，大腸癌是個治癒率很高的癌症。且根據統計，早期的大腸癌如果妥善治療，存活率高達90％以上。\n篩檢政策依據歐美國家經驗，每一至二年進行1次糞便潛血篩檢約可下降18％至33％的大腸癌死亡率。', group: '大腸癌概況'},
]

let qatadata = [
  { group: '有什麼症狀'},
  {name: '第零期',des:'大腸癌的早期並無症狀，最可靠的方法就是定期接受大腸癌篩檢，而定量免疫法糞便潛血檢查是目前最安全且方便的篩檢工具。\n檢查結果如有異常（篩檢結果為陽性），需進一步接受大腸鏡檢查。\n若出現下列症狀，請儘速就醫：\n◎大便中有血\n◎大便中有黏液\n◎排便習慣改變 (一下子腹瀉，一下子便秘)\n◎大便變細小\n◎經常性腹瀉或便秘\n◎體重減輕\n◎貧血\n◎如腫瘤較大，可觸摸到腫塊\n以上症狀不代表發生大腸癌，但症狀如持續出現超過2星期以上，應立即請專科醫師檢查。', group: '有什麼症狀'}

]

let watadata = [
  {group:'檢驗補助資格'},
  {name: '第零期',des:'在台灣，由於大腸癌多發生在 50 歲以後，因此，國民健康署有效運用菸品健康福利捐，補助50-74歲民眾每2年1次定量免疫法糞便潛血檢查，民眾可持健保卡到健保特約醫療院所檢查，檢查服務資訊請洽當地衛生局、健康服務中心。', group: '檢驗補助資格'},

  {group:'單次檢驗費用'},
  {name: '第零期',des:'林口衛生所單次自費為$350', group: '單次檢驗費用'},

]

let eatadata = [
      {group: '糞便潛血檢查'},
      {name: '第零期',des:'糞便潛血檢查是檢查糞便表面是否有肉眼看不出來的血液，由於大腸癌的腫瘤或息肉會受到糞便摩擦而流血，血液因而附著在糞便表面排出，所以透過糞便潛血檢查能早期發現大腸癌或息肉個案。\n並經由大腸鏡檢查作進一步診斷，及早接受治療，進而阻斷癌症的發生與進展，才能減少大腸癌的傷害。\n目前糞便潛血檢查是使用定量免疫法，不需要飲食限制，相當簡單方便。糞便潛血檢查並非百分之百準確，當有任何異狀時，仍應找專科醫師做必要檢查。\n\n做糞便潛血檢查需要注意什麼：\n1.在糞便的不同表面刮取適量的糞便，放入內含保存液專用的採便管。\n2.由於糞便中的血液在室溫下會被破壞，請採檢完後盡速送回；如無法於當日立即送檢，務必先存放於冰箱冷藏保存。', group: '糞便潛血檢查'},

]

let ratadata = [
  {group: '結果為陽性'},
  {name: '第零期',des:'如果糞便潛血檢查呈陽性時，建議至大腸直腸外科、腸胃肝膽科、消化腸胃系內科或一般外科，進一步接受大腸鏡檢查，其好處是檢查過程如有發現病兆或瘜肉時，可以直接取樣做切片或是將它切除。\n若無法做大腸鏡檢查時，可考慮大腸鋇劑攝影加乙狀結腸鏡檢查。', group: '結果為陽性'},

  {group: '後續建議'},
  {name: '第零期',des:'1.正常：不需作其他處理，建議每2年定期做糞便潛血檢查。\n2.發現息肉：切除息肉，並依專科醫師指示做大腸鏡檢查追蹤。\n3.發現大腸癌：請依專科醫師指示接受後續治療及處置。', group: '後續建議'},

]

export default class HEALTH extends Component {

    constructor(props) {
        super(props);

        this._renderSectionHeader = this._renderSectionHeader.bind(this);
        this._QrenderSectionHeader = this._QrenderSectionHeader.bind(this);
        this._WrenderSectionHeader = this._WrenderSectionHeader.bind(this);
        this._ErenderSectionHeader = this._ErenderSectionHeader.bind(this);
        this._RrenderSectionHeader = this._RrenderSectionHeader.bind(this);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (section1, section2) => section1 !== section2,
                getRowData: (data, sectionID, rowID) => {
                    if (data[sectionID][0].hide) {
                        return undefined;
                    } else {
                        return data[sectionID][rowID];
                    }
                },
                getSectionHeaderData: (data, sectionID) => {
                    return data[sectionID];
                }
            }),

            qatSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (section1, section2) => section1 !== section2,
                getRowData: (data, sectionID, rowID) => {
                    if (data[sectionID][0].hide) {
                        return undefined;
                    } else {
                        return data[sectionID][rowID];
                    }
                },
                getSectionHeaderData: (data, sectionID) => {
                    return data[sectionID];
                }

            }),
            watSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (section1, section2) => section1 !== section2,
                getRowData: (data, sectionID, rowID) => {
                    if (data[sectionID][0].hide) {
                        return undefined;
                    } else {
                        return data[sectionID][rowID];
                    }
                },
                getSectionHeaderData: (data, sectionID) => {
                    return data[sectionID];
                }

            }),
            eatSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (section1, section2) => section1 !== section2,
                getRowData: (data, sectionID, rowID) => {
                    if (data[sectionID][0].hide) {
                        return undefined;
                    } else {
                        return data[sectionID][rowID];
                    }
                },
                getSectionHeaderData: (data, sectionID) => {
                    return data[sectionID];
                }

            }),
            ratSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (section1, section2) => section1 !== section2,
                getRowData: (data, sectionID, rowID) => {
                    if (data[sectionID][0].hide) {
                        return undefined;
                    } else {
                        return data[sectionID][rowID];
                    }
                },
                getSectionHeaderData: (data, sectionID) => {
                    return data[sectionID];
                }

            }),

            sourceData: undefined,
            qatadata: undefined,
            watadata: undefined,
            eatadata: undefined,
            ratadata: undefined,
        }
    }




    componentDidMount() {
        this._configSourceData(sourceData);
        this._QconfigSourceData(qatadata);
        this._WconfigSourceData(watadata);
        this._EconfigSourceData(eatadata);
        this._RconfigSourceData(ratadata);
    }






    _renderFriendRow(friend, sectionID, rowID) {

        if (friend === undefined || (rowID == 0 && !friend.hide)) {
            return null;
        }

        return (
            <View style={styles.content}>
                <View style={styles.container}>
                <Text style={styles.listviewwtext2}>{friend.des}</Text>
                </View>

            </View>

        )
    }

    _renderSectionHeader(friend, sectionID) {

        return (
            <TouchableOpacity
                style={styles.listvieww}
                onPress={()=>{
                    let newSourceData = this.state.sourceData;

                    for (let friendGroup in this.state.sourceData) {
                        if (friendGroup === sectionID) {
                            newSourceData[sectionID][0].hide = !newSourceData[sectionID][0].hide;
                        }
                    }

                    this.setState({sourceData: newSourceData});
                }}
            >
            <View style={styles.test}>
            <Image style={styles.photo} source = {require('../images/gg.png')} />
            <Text style={styles.text}>{sectionID}</Text>
            </View>

            </TouchableOpacity>
        )
    }

    _configSourceData(friends) {
        let sourceData = {};
        for (let friend of friends) {
            if (sourceData[friend.group]) {
                sourceData[friend.group].push(friend);
            } else {
                sourceData[friend.group] = [{hide: true}];
            }
        }

        this.setState({
            sourceData: sourceData
        });
    }











    _QrenderFriendRow(friend, sectionID, rowID) {

        if (friend === undefined || (rowID == 0 && !friend.hide)) {
            return null;
        }

        return (
            <View style={styles.content}>
                <View style={styles.container}>
                <Text style={styles.listviewwtext2}>{friend.des}</Text>
                </View>

            </View>

        )
    }

    _QrenderSectionHeader(friend, sectionID) {

        return (
            <TouchableOpacity
                style={styles.listvieww}
                onPress={()=>{
                    let newSourceData = this.state.qatadata;

                    for (let friendGroup in this.state.qatadata) {
                        if (friendGroup === sectionID) {
                            newSourceData[sectionID][0].hide = !newSourceData[sectionID][0].hide;
                        }
                    }

                    this.setState({qatadata: newSourceData});
                }}
            >
            <View style={styles.test}>
            <Image style={styles.photo} source = {require('../images/dd.png')} />
            <Text style={styles.text}>{sectionID}</Text>
            </View>

            </TouchableOpacity>
        )
    }

    _QconfigSourceData(friends) {
        let qatadata = {};
        for (let friend of friends) {
            if (qatadata[friend.group]) {
                qatadata[friend.group].push(friend);
            } else {
                qatadata[friend.group] = [{hide: true}];
            }
        }

        this.setState({
            qatadata: qatadata
        });
    }









    _WrenderFriendRow(friend, sectionID, rowID) {

        if (friend === undefined || (rowID == 0 && !friend.hide)) {
            return null;
        }

        return (
            <View style={styles.content}>
                <View style={styles.container}>
                <Text style={styles.listviewwtext2}>{friend.des}</Text>
                </View>

            </View>

        )
    }

    _WrenderSectionHeader(friend, sectionID) {

        return (
            <TouchableOpacity
                style={styles.listvieww}
                onPress={()=>{
                    let newSourceData = this.state.watadata;

                    for (let friendGroup in this.state.watadata) {
                        if (friendGroup === sectionID) {
                            newSourceData[sectionID][0].hide = !newSourceData[sectionID][0].hide;
                        }
                    }

                    this.setState({watadata: newSourceData});
                }}
            >
            <View style={styles.test}>
            <Image style={styles.photo} source = {require('../images/ee.png')} />
            <Text style={styles.text}>{sectionID}</Text>
            </View>

            </TouchableOpacity>
        )
    }

    _WconfigSourceData(friends) {
        let watadata = {};
        for (let friend of friends) {
            if (watadata[friend.group]) {
                watadata[friend.group].push(friend);
            } else {
                watadata[friend.group] = [{hide: true}];
            }
        }

        this.setState({
            watadata: watadata
        });
    }







    _ErenderFriendRow(friend, sectionID, rowID) {

        if (friend === undefined || (rowID == 0 && !friend.hide)) {
            return null;
        }

        return (
            <View style={styles.content}>
                <View style={styles.container}>
                <Text style={styles.listviewwtext2}>{friend.des}</Text>
                </View>

            </View>

        )
    }

    _ErenderSectionHeader(friend, sectionID) {

        return (
            <TouchableOpacity
                style={styles.listvieww}
                onPress={()=>{
                    let newSourceData = this.state.eatadata;

                    for (let friendGroup in this.state.eatadata) {
                        if (friendGroup === sectionID) {
                            newSourceData[sectionID][0].hide = !newSourceData[sectionID][0].hide;
                        }
                    }

                    this.setState({eatadata: newSourceData});
                }}
            >
            <View style={styles.test}>
            <Image style={styles.photo} source = {require('../images/ff.png')} />
            <Text style={styles.text}>{sectionID}</Text>
            </View>
            </TouchableOpacity>
        )
    }

    _EconfigSourceData(friends) {
        let eatadata = {};
        for (let friend of friends) {
            if (eatadata[friend.group]) {
                eatadata[friend.group].push(friend);
            } else {
                eatadata[friend.group] = [{hide: true}];
            }
        }

        this.setState({
            eatadata: eatadata
        });
    }








    _RrenderFriendRow(friend, sectionID, rowID) {

        if (friend === undefined || (rowID == 0 && !friend.hide)) {
            return null;
        }

        return (
            <View style={styles.content}>
                <View style={styles.container}>
                <Text style={styles.listviewwtext2}>{friend.des}</Text>
                </View>

            </View>

        )
    }

    _RrenderSectionHeader(friend, sectionID) {

        return (
            <TouchableOpacity
                style={styles.listvieww}
                onPress={()=>{
                    let newSourceData = this.state.ratadata;

                    for (let friendGroup in this.state.ratadata) {
                        if (friendGroup === sectionID) {
                            newSourceData[sectionID][0].hide = !newSourceData[sectionID][0].hide;
                        }
                    }

                    this.setState({ratadata: newSourceData});
                }}
            >
            <View style={styles.test}>
            <Image style={styles.photo} source = {require('../images/aa.png')} />
            <Text style={styles.text}>{sectionID}</Text>
            </View>

            </TouchableOpacity>
        )
    }

    _RconfigSourceData(friends) {
        let ratadata = {};
        for (let friend of friends) {
            if (ratadata[friend.group]) {
                ratadata[friend.group].push(friend);
            } else {
                ratadata[friend.group] = [{hide: true}];
            }
        }

        this.setState({
            ratadata: ratadata
        });
    }


    aa() {
    Linking.openURL('http://ebooks.cgu.usalab.org/books/johnjohn123/2/').catch(err => console.error('An error occurred', err));
    }

    bb() {
    Linking.openURL('http://ebooks.cgu.usalab.org/books/johnjohn123/4/').catch(err => console.error('An error occurred', err));
    }

    cc() {
    Linking.openURL('http://ebooks.cgu.usalab.org/books/johnjohn123/5/').catch(err => console.error('An error occurred', err));
    }

    dd() {
    Linking.openURL('http://ebooks.cgu.usalab.org/books/johnjohn123/1/').catch(err => console.error('An error occurred', err));
    }

    ee() {
    Linking.openURL('http://ebooks.cgu.usalab.org/books/johnjohn123/3/').catch(err => console.error('An error occurred', err));
    }




    render() {

        let friendsData = this.state.sourceData;
        let sectionIDs = [];
        let rowIDs = [];
        for (let sectionID in friendsData) {
            // Work、Family
            sectionIDs.push(sectionID);

            let row = [];
            friendsData[sectionID].map((friend, index) => {
                row.push(index);
            })

            rowIDs.push(row);
        }

        let qfriendsData = this.state.qatadata;
        let qsectionIDs = [];
        let qrowIDs = [];
        for (let sectionID in qfriendsData) {
            // Work、Family
            qsectionIDs.push(sectionID);

            let row = [];
            qfriendsData[sectionID].map((friend, index) => {
                row.push(index);
            })

            qrowIDs.push(row);
        }

        let wfriendsData = this.state.watadata;
        let wsectionIDs = [];
        let wrowIDs = [];
        for (let sectionID in wfriendsData) {
            // Work、Family
            wsectionIDs.push(sectionID);

            let row = [];
            wfriendsData[sectionID].map((friend, index) => {
                row.push(index);
            })

            wrowIDs.push(row);
        }

        let efriendsData = this.state.eatadata;
        let esectionIDs = [];
        let erowIDs = [];
        for (let sectionID in efriendsData) {
            // Work、Family
            esectionIDs.push(sectionID);

            let row = [];
            efriendsData[sectionID].map((friend, index) => {
                row.push(index);
            })

            erowIDs.push(row);
        }

        let rfriendsData = this.state.ratadata;
        let rsectionIDs = [];
        let rrowIDs = [];
        for (let sectionID in rfriendsData) {
            // Work、Family
            rsectionIDs.push(sectionID);

            let row = [];
            rfriendsData[sectionID].map((friend, index) => {
                row.push(index);
            })

            rrowIDs.push(row);
        }







        return (
          <ScrollView>
            <View style={{flex: 1, paddingTop: 20,backgroundColor:'white'}}>

            <View style={styles.container}>
            <Text style={styles.logotest}>
            癌症簡介
            </Text>
            </View>

            <View style = {styles.border}>
            </View>

                <ListView
                    dataSource={this.state.dataSource.cloneWithRowsAndSections(friendsData, sectionIDs, rowIDs)}
                    renderRow={this._renderFriendRow}
                    renderSeparator={(sectionId, rowId) => <View key={sectionId} style={styles.separator} />}
                    renderSectionHeader={this._renderSectionHeader}
                >

                </ListView>

                <View style = {styles.border}>
                </View>

                <View style={styles.container}>
                <Text style={styles.logotest}>
                醫學病徵
                </Text>
                </View>

                <View style = {styles.border}>
                </View>

                <ListView
                    dataSource={this.state.qatSource.cloneWithRowsAndSections(qfriendsData, qsectionIDs, qrowIDs)}
                    renderRow={this._QrenderFriendRow}
                    renderSeparator={(sectionId, rowId) => <View key={sectionId} style={styles.separator} />}
                    renderSectionHeader={this._QrenderSectionHeader}
                >

                </ListView>

                <View style = {styles.border}>
                </View>


                <View style={styles.container}>
                <Text style={styles.logotest}>
                健保資訊
                </Text>
                </View>

                <View style = {styles.border}>
                </View>

                <ListView
                    dataSource={this.state.watSource.cloneWithRowsAndSections(wfriendsData, wsectionIDs, wrowIDs)}
                    renderRow={this._WrenderFriendRow}
                    renderSeparator={(sectionId, rowId) => <View key={sectionId} style={styles.separator} />}
                    renderSectionHeader={this._WrenderSectionHeader}
                >

                </ListView>

                <View style = {styles.border}>
                </View>



                <View style={styles.container}>
                <Text style={styles.logotest}>
                篩檢器具
                </Text>
                </View>

                <View style = {styles.border}>
                </View>

                <ListView
                    dataSource={this.state.eatSource.cloneWithRowsAndSections(efriendsData, esectionIDs, erowIDs)}
                    renderRow={this._ErenderFriendRow}
                    renderSeparator={(sectionId, rowId) => <View key={sectionId} style={styles.separator} />}
                    renderSectionHeader={this._ErenderSectionHeader}
                >

                </ListView>

                <View style = {styles.border}>
                </View>



                <View style={styles.container}>
                <Text style={styles.logotest}>
                檢查結果
                </Text>
                </View>

                <View style = {styles.border}>
                </View>

                <ListView
                    dataSource={this.state.ratSource.cloneWithRowsAndSections(rfriendsData, rsectionIDs, rrowIDs)}
                    renderRow={this._RrenderFriendRow}
                    renderSeparator={(sectionId, rowId) => <View key={sectionId} style={styles.separator} />}
                    renderSectionHeader={this._RrenderSectionHeader}
                >

                </ListView>

                <View style = {styles.border}>
                </View>

                <View style={styles.container}>
                <Text style={styles.logotest}>
                電子書
                </Text>
                </View>

                <View style = {styles.border}>
                </View>

                <TouchableOpacity style={styles.listvieww} onPress={this.aa.bind(this)} >
                <View style={styles.test}>
                <Image style={styles.photo} source = {require('../images/ebook.png')} />
                <Text style={styles.text}>大腸癌宣導手冊</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.listvieww} onPress={this.bb.bind(this)} >
                <View style={styles.test}>
                <Image style={styles.photo} source = {require('../images/ebook.png')} />
                <Text style={styles.text}>每日飲食指南</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.listvieww} onPress={this.cc.bind(this)} >
                <View style={styles.test}>
                <Image style={styles.photo} source = {require('../images/ebook.png')} />
                <Text style={styles.text}>拒售菸品</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.listvieww} onPress={this.dd.bind(this)} >
                <View style={styles.test}>
                <Image style={styles.photo} source = {require('../images/ebook.png')} />
                <Text style={styles.text}>糖尿病與我</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.listvieww} onPress={this.ee.bind(this)} >
                <View style={styles.test}>
                <Image style={styles.photo} source = {require('../images/ebook.png')} />
                <Text style={styles.text}>子宮頸衛教手冊</Text>
                </View>
                </TouchableOpacity>

                <View style = {styles.border}>
                </View>

                <View style={styles.container}>
                <Text style={styles.logotest}>
                衛生署國健局建議
                </Text>
                </View>

                <View style = {styles.border}>
                </View>

                <Image style={{height: Dimensions.get('window').height/1.6,width: Dimensions.get('window').width}} source = {require('../images/health.jpg')} />




            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  sectionHeader: {
      width: SCREEN_WIDTH,
      height: 44,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
      borderWidth: 0.1,
  },
  container: {
    alignItems: 'center'
  },
  logotest:{
    fontSize:25,
    fontWeight:"bold",
    marginBottom:15,
    color: 'black',
  },
  text:{
    fontSize:20,
    fontWeight:"bold",
    color: 'black',
    marginBottom:5,
    marginLeft: 50,

  },
  listvieww:{
    marginBottom: 10,
  },
  content: {
      marginBottom: 5,
      backgroundColor:'#f5eee2',
  },
  listviewwtext1:{
    marginBottom: 10,
    fontSize:20,
    color: 'black',
  },
  listviewwtext2:{
    marginBottom: 10,
    fontSize:18,
    color: 'black',
  },
  photo:{
    height: 50,
    width: 50,
    borderRadius: 20,
  },
  test:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 50,
  },
  border: {
    borderWidth: 0.4,
    borderColor: 'black',
    marginBottom: 10
  },

})
