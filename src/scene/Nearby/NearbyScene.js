import React, {PureComponent} from 'react'
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
    Modal,
    StyleSheet,
    Dimensions,
    NativeModules
} from 'react-native';
var ImagePicker = NativeModules.ImageCropPicker;
const windowWidth = Dimensions.get('window').width;
const margin = 20;
const imgInterval = 5;
const imgCountLimit = 9;
const textLengthLimit = 140;

type Props = {
    navigation: any,
}


class NearbyScene extends PureComponent<Props> {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            images: [],
            imagesID: [], //上传图片返回的 hash id
            tags: [], //已经添加的tag
            tag: '',  //正在输入的tag
            tagCountLimit: 5,
            uploadAlready: false,
            animated: true,
            modalVisible: true,
            transparent: false,
        }
    }
    render() {
        var modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
        };
        var innerContainerTransparentStyle = this.state.transparent
            ? {backgroundColor: '#fff', padding: 20}
            : null;
        return (
            <Modal
                animationType={"slide"}
                transparent={this.state.transparent}
                visible={this.state.modalVisible}>
                <View style={styles.nav}>
                    <View style={styles.cancleBtn}>
                        <Text>取消</Text>
                    </View>
                    <View style={styles.title}><Text style={{textAlign: 'center', fontWeight: 'bold'}}>发状态</Text></View>
                    <View style={styles.sendBtn}>
                        <TouchableOpacity>
                            <Text style={{textAlign: 'right', color: '#00B5AD'}}>发送</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={{ flex: 1, flexDirection: 'column'}}>
                    <View style={styles.input}>
                        <View>
                            <TextInput
                                style={styles.multiline}
                                placeholder="说点什么吧..."
                                returnKeyType="next"
                                autoFocus={true}
                                multiline={true}
                                keyboardType='twitter'
                                maxLength = {140}
                                value={this.state.text}
                                onChangeText={(text) => this.setState({text})}
                            />
                            <Text style={{position: 'absolute', bottom: 10, right: 20, color: '#9B9B9B'}}>{textLengthLimit-this.state.text.length}</Text>
                        </View>
                    </View>
                    <View style={styles.imgContainer}>
                        {}
                    </View>
                    <View style={styles.tagsContainer}>
                        <View style={{flex:1, flexDirection: 'row'}}>
                            <Text style={styles.tagIcon}>#</Text>
                            <TextInput
                                style={styles.tagInput}
                                placeholder="添加标签"
                                returnKeyType="done"
                                autoFocus={false}
                                multiline={false}
                                keyboardType='twitter'
                                maxLength = {140}
                                value={this.state.tag}
                                onChangeText={(tag) => {}}
                            />
                        </View>
                        <View style={styles.tags}>
                            {this.state.tags.length > 0}
                        </View>
                    </View>
                </ScrollView>
            </Modal>
        )
    }
}


var styles = StyleSheet.create({
    container: {
        //justifyContent: 'center',
        //marginTop: 70,
        //padding: 20,
        flex : 1,
        // backgroundColor: '#ffffff',
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        flex: 1,
    },
    cancleBtn: {
        width: 50,
    },
    sendBtn: {
        width: 50,
    },
    wrap: {
        flex: 1,
        flexDirection:'column',
    },
    nav: {
        //flex: 1,
        flexDirection: 'row',
        height: 70,
        paddingTop: 35,
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: 0.3,
        borderBottomColor: '#9B9B9B',
    },
    input: {
        //flex:1,
        //position: 'relative',
        //flexDirection:'column',
    },
    footer: {
        height: 30,
        backgroundColor:'#ff99ff',
    },
    multiline: {
        // borderWidth: 1,
        // borderColor: 'black',
        flex: 1,
        fontSize: 18,
        height: 150,
        padding: 20,
        paddingBottom: 40,
    },
    tagIcon: {
        width: 20,
        height: 40,
        color: '#9B9B9B',
        fontSize: 23,
        marginLeft: 20,
    },

    tagsContainer: {
        flex:1,
        height: 100,
        marginBottom: 50,
    },
    tagInput: {
        flex:1,
        height: 30,
        // borderWidth: 1,
        // borderColor: 'black',
        width: windowWidth-margin*4,
        marginRight: 20,
        //marginLeft: margin,
    },
    tags: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: windowWidth-margin*2,
        height: 100,
        margin: margin,
        marginTop: 30,
        // borderWidth: 1,
        // borderColor: 'black',
    },
    tag: {
        height: 26,
        marginRight: 10,
        marginBottom: 5,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#F3F3F3',
        // borderColor: '#adadad',
        // borderWidth: 0.5,
        borderRadius: 5,
    },
    imgContainer: {
        //height: windowHeight - 70 - 150 - 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 0,
        marginLeft: margin,
        marginBottom: 20,
    },
    imgWrapper: {
        position: 'relative',
        width: (windowWidth-margin*2-imgInterval*2) / 3,
        height:(windowWidth-margin*2-imgInterval*2) / 3,
        marginBottom: imgInterval,
        marginRight: imgInterval,
    },
    img: {
        width: (windowWidth-margin*2-imgInterval*2) / 3,
        height:(windowWidth-margin*2-imgInterval*2) / 3,
        marginBottom: imgInterval,
        marginRight: imgInterval,
        resizeMode: 'cover',
    },
    delIcon: {
        position: 'absolute',
        top:0,
        right: 0,
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0)',
    }

});
export default NearbyScene
