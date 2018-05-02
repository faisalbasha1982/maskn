import AesCrypto from 'react-native-aes-kit';

const plaintxt = 'test';
const secretKey = '0102030405060708';
const iv = '1112131415161718';

export default class LaunchScreenEncrypt extends Component {

    encrypt = (plaintxt,secretKey,iv) => {

        AesCrypto.encrypt(plaintxt,secretKey,iv).then(cipher=>{
            console.log(cipher);// return a string type cipher
            this.setState({ cipher });
        }).catch(err=>{
            console.log(err);
        });
        
        AesCrypto.decrypt(this.state.cipher,secretKey,iv).then(plaintxt=>{
            console.log(plaintxt);// return a string type plaintxt
        }).catch(err=>{
            console.log(err);
        });
    }

    render(){
            <View style={{ flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                <TouchableOpacity onPress={this.encrypt}>
                     <Text>Encrypt</Text>
                </TouchableOpacity>
            </View>
    }

}

