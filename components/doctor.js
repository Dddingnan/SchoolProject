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
import lop from './login.js'

let sourceData = [
    {group: '第零期'},
    {name: '第零期',curet: '治療方式:',cure: '外科手術',dest:'說明:',des:'較小的惡性瘜肉或腫瘤可採用大腸內視鏡 瘜肉切除術或是內視鏡黏膜切除術及內視鏡黏膜下層切除術，若是腫瘤過大無法以內視鏡完整切除時，則需要實行結腸切除術。', group: '第零期'},
    { group: '第一期'},
    {name: '第一期',curet: '治療方式:', cure: '外科手術',dest:'說明:',des:'此階段以手術為主，須將腫瘤及腫瘤附近相關的淋巴結群完全切除。外科手術有微創手術與剖腹手術，目前的趨勢是微創手術。', group: '第一期'},
    {group:'第二期'},
    {name: '第二期',curet: '治療方式:', cure: '外科手術',dest:'說明:',des:'須將腫瘤及腫瘤附近相關的淋巴結群完全切除。術後對於部分具有高風險復發的病人應給予輔助性化學治療。', group: '第二期'},
    {group:'第三期'},
    {name: '第三期',curet: '治療方式:', cure: '外科手術、術後輔助性化學治療',dest:'說明:',des:'此階段癌症已經明確擴散到腫瘤附近淋巴結群，但是還沒有擴散到身體其他部位， 醫師不但須將腫瘤及腫瘤附近相關的淋巴結群做完整切除，術後會合併使用輔助性化學治療。若是不適合手術的病人，則可 能會選擇使用化學治療或放射治療。', group: '第三期'},
    {group: '第四期'},
    {name: '第四期',curet: '治療方式:', cure: '化學治療、標靶治療、外科手術',dest:'說明:',des:'此階段癌症已經轉移到遠端器官。若腫瘤有阻塞、穿孔或是大量出血時，必須先考慮手術。若轉移病灶是可以完全切除，建 議採取同時或分階段手術，將原發及轉移腫瘤完整切除，並在手術前後給予化學治 療。如果轉移的部位難以手術切除，化學治療為主要的治療方式。大部分的病人多採用化學治療搭配合適的標靶藥物來控制疾病（需做基因檢測）。',group: '第四期'},
]

let eatadata = [
  {group:'手術後'},
  {dest:'建議:',des:'1.避免攝取纖維含量過高的蔬菜(以低渣飲食為原則)。\n主要是要儘量減少食物經消化 道消化後的渣滓，以減少糞便的量，並使胃腸道有充分的休息，及減少刺激性，使 腸胃傷口早日癒合。\n但低渣飲食使用數天以上，應注意要補充礦物質，及多種維生素。\n2.食物應充分咀嚼，以避免造成糞便體積過大而阻塞造成不適。\n3.口味以清淡、不油膩為原則\n4.準備食物前及飯前務必將雙手及用具清洗乾淨(以避免感染)。',group: '手術後'},

  {group:'腹瀉時'},
  {dest:'建議:',des:'1.腹瀉會令您大量失水，所以要多喝水，以保持電解質平衡。\n2.如果腹瀉很嚴重，須改吃清淡流質食品以讓腸道能夠稍微休息，但流質飲食無法 提供足夠的營養，因此以不超過3到5天為原則。\n3.在腹瀉期間避免再進食油炸、油膩、辛辣的食物，以免刺激腸胃蠕動，使得腹瀉 及絞痛情況更嚴重。\n4.為了避免腹瀉更嚴重，此時不能再攝取高纖飲食。例如全麥麵包、麥片、生菜、 豆子、堅果、菜籽、爆米花、水果以及乾果等，這些都可能會引起腹瀉或絞痛。\n5.食物的攝取要改成低纖飲食，例如白麵包、白米飯或麵條、香蕉、乳酪、罐裝或 煮過的無皮水果、優格、蛋、無皮馬鈴薯、蔬菜濃湯、無皮的雞肉或火雞肉以及魚 類等。\n6.腹瀉的時候會讓體內的鉀流失，此時除非有其他疾病(特別是慢性腎衰竭等禁忌)的 考量，要不然可多補充含高鉀的食物，如香蕉、橘子、馬鈴薯、楊桃等。', group: '腹瀉時'},

  {group:'口腔、喉嚨潰傷時'},
  {dest:'建議:',des:'1.多食用清涼食物，避免熱食，以免刺激潰瘍處。\n2.口腔潰瘍期應特別注重營養，以促進細胞修復。要多選擇高熱量、高蛋白之食物。\n3.選擇柔軟好入口的食物，像是冰淇淋、奶昔、軟性水果如香蕉、蘋果泥、馬鈴薯泥 、煮過的麥片、水煮蛋或炒蛋、通心粉派、布丁等。\n4.利用果汁機把煮過的食物加以處理打碎，以方便食用。\n5.避免酸性及刺激性的食物如：蕃茄、檸檬、某些果汁（如柳橙汁、葡萄汁、檸檬汁 ）、太酸或太鹹的食物、粗糙和較乾的食物如生菜、土司等，以免刺激潰瘍的口腔黏膜。', group: '口腔、喉嚨潰傷時'},

  {group:'噁心、嘔吐時'},
  {dest:'建議:',des:'1.少量多餐，避免一次吃太多食物。\n2.喝水選在用餐前或用餐後的一小時，而不要在用餐的時候喝水。\n3.進食時要儘量細嚼慢嚥，才可消化得更好。\n4.食物的選擇盡可能清淡，避免甜食、油炸、油膩的食物。\n5.如果噁心感發作的時間在早上居多，可在起床前吃一些乾糧，像麥片、土司或餅乾。\n6.如果在化學治療的過程中會感到噁心，那麼在接受下次治療以前的幾小時最好保持空腹。\n7.飯後在椅子上坐著休息一會，兩小時內儘量不要平躺下來，以幫助消化。', group: '噁心、嘔吐時'},

  {group:'便秘時'},
  {dest:'建議:',des:'1.多喝水幫助軟化大便。\n2.多吃一點高纖的食物，如蔬菜、水果、全麥麵包、豆類等都有豐富的纖維素含量。\n3.在體力許可下進行適度的運動，以增進腸蠕動。\n4.養成正常排便的習慣，避免不必要的心理壓力。\n5.如果沒有醫生指示，您千萬不要自行去吃瀉藥、軟便劑或是灌腸，尤其是當您的白 血球或血小板數量太少的時候。', group: '便秘時'},
]





export default class Doctor extends Component {

    constructor(props) {
        super(props);


        this._renderSectionHeader = this._renderSectionHeader.bind(this);

        this._ErenderSectionHeader = this._ErenderSectionHeader.bind(this);

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

            sourceData: undefined,
            eatadata: undefined
        }
    }


    componentDidMount() {
        this._configSourceData(sourceData);
        this._EconfigSourceData(eatadata);
    }

    _renderFriendRow(friend, sectionID, rowID) {

        if (friend === undefined || (rowID == 0 && !friend.hide)) {
            return null;
        }

        return (
            <View style={styles.content}>

                <Text style={styles.listviewwtext1}>{friend.curet}</Text>

                <View style={styles.container}>
                <Text style={styles.listviewwtext2}>{friend.cure}</Text>
                </View>

                <Text style={styles.listviewwtext1}>{friend.dest}</Text>

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
            <Image style={styles.photo} source = {require('../images/cccc.png')} />
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



    _ErenderFriendRow(friend, sectionID, rowID) {

        if (friend === undefined || (rowID == 0 && !friend.hide)) {
            return null;
        }

        return (
            <View style={styles.content}>

                <Text style={styles.listviewwtext1}>{friend.dest}</Text>

                <View style={styles.container}>
                <Text style={styles.listviewwtext2}>{friend.des}</Text>
                </View>

                <View style={styles.test}>
                <Text >{friend.image}</Text>
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
            <Image style={styles.photo} source = {require('../images/bb.png')} />
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

    line() {
    Linking.openURL('http://line.me/ti/p/mLXiKi3BLa').catch(err => console.error('An error occurred', err));
    }

    facebook(){
    Linking.openURL('https://www.facebook.com/linkou.nhs/').catch(err => console.error('An error occurred', err));
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

        let friendsDatas = this.state.eatadata;
        let sectionIDss = [];
        let rowIDss = [];

        for (let sectionID in friendsDatas) {
            // Work、Family
            sectionIDss.push(sectionID);

            let row = [];
            friendsDatas[sectionID].map((friend, index) => {
                row.push(index);
            })

            rowIDss.push(row);
        }

        return (
          <ScrollView>
            <View style={{flex: 1, paddingTop: 10,backgroundColor:'white'}}>



            <View style={styles.container}>
            <Text style={styles.logotest}>
            大腸癌各期治療方式
            </Text>
            </View>

            <View style = {styles.border}>
            </View>

            <ListView
                dataSource={this.state.dataSource.cloneWithRowsAndSections(friendsData, sectionIDs, rowIDs)}
                renderRow={this._renderFriendRow}
                renderSectionHeader={this._renderSectionHeader}
            >
            </ListView>
            <View style = {styles.border}>
            </View>

                <View style={styles.container}>
                <Text style={styles.logotest}>
                飲食指南
                </Text>
                </View>

                <View style = {styles.border}>
                </View>

                <ListView
                    dataSource={this.state.eatSource.cloneWithRowsAndSections(friendsDatas, sectionIDss, rowIDss)}
                    renderRow={this._ErenderFriendRow}
                    renderSectionHeader={this._ErenderSectionHeader}
                >
                </ListView>

                <View style = {styles.border}>
                </View>


                <View style={styles.container}>
                <Text style={styles.logotest}>
                林口衛生所官方聯絡資訊
                </Text>
                </View>

                <View style = {styles.border}>
          			</View>

                <TouchableOpacity onPress={this.facebook.bind(this)} >
                <View style={styles.test}>
                <Image style = {{width: 80,height: 80,borderRadius: 20}} source = {require('../images/fb.png')} />
                <Text style = {{fontSize:30,color: 'black'}}>
                FaceBook
                </Text>
                </View>
                </TouchableOpacity>

                <View style = {{
                      borderWidth: 0.4,
                      borderColor: 'black',
                      marginBottom: 7,
                      marginTop:7
                    }}>
          			</View>


                <TouchableOpacity onPress={this.line.bind(this)} >
                <View style={styles.test}>
                <Image style = {{width: 80,height: 80,borderRadius: 20}} source = {require('../images/line.png')} />
                <Text style = {{fontSize:30,color: 'black'}}>
                LINE
                </Text>
                </View>
                </TouchableOpacity>

                <View style = {{
                      borderWidth: 0.4,
                      borderColor: 'black',
                      marginBottom: 5,
                      marginTop:5
                    }}>
                </View>


            <View style={styles.container}>
            <Text style = {{fontSize:18, fontWeight:"bold", color:'#E787A9'}}>
            早期發現早期治療是防治大腸癌最重要法則
            </Text>
            </View>

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
      alignItems: 'center',
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
