import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, ScrollView } from "react-native";

export default function Main() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.title}>
                    <Text style={{ color: '#3E7BC9', fontWeight: 'bold' }}>Nguyễn</Text>님 환영합니다
                </Text>

                <View style={styles.profilecontainer}>
                    <Image
                        source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXFxcXFxcWFxUXFxcYGBcYFxgXFxUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQFSsdFR0rLS0rKystLS0rLSstLS0tLS03LS0tLS0tLS0tLS0tLS0tLS0tLS0tNy44Ky0tLSsrK//AABEIAPUAzgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAgQFBgcBAAj/xAA8EAABAwEFBQYFAwQABwEAAAABAAIRAwQFITFBBhJRYXEigZGxwfATMqHR4QdCUhQjYvEkM0OCkrLSFf/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACARAQEAAgIDAAMBAAAAAAAAAAABAhEDMRIhQSIyQgT/2gAMAwEAAhEDEQA/AMttb9Agtp4IkS6Up5hZbbG7wlMgBBe7FcYccVSUxYBIPCD5IcwTqOGf5RbrdHZiQe4p1XskY+fvNT9V8ABBEjHz/KC58dF44HULlXjh9+Y5ogd35z8V0VCPQ+iADwS6Zn7KtEcB84jPUcUprpw/2E0ndM6Iu9qlpUrRdhNvTQIs1qM0smVNWcncW/ULXqTg4AtIIIkEYhfMeYxVu2F24qWQijVO9QJ5ksnVp/jyWeWH2BuW6uFQ9s2pstKiKz6zdxw7MYudyawYkqnXhtHbbYd2ztNlonDeONd45DKn581nMbSt0tW0O1lmsnZe7fq/to0+1UPUD5RzKpluvC3287ribPRP/SpHtuH+b/QYKSuPY5lPtEdo4uc7tPcebirTZ7G1ggCFW8cevdLVqs3Psuyk2N0NHAZnqdSp6lQa0QBCdPCE5K5WnJoC005aRyVUsdPtVKfEH6K4EKr2sblpnQkfXBVDiu2mh83RLunFrmnVpHeMk8vClu1nN4ym92CDOm+PqY9VSnrEP7beTij0nJTqHw5af5E92fqm9OsJgphmIZujmmlUpxbK0ApocgnEVw5j3Ck7qut1Q5JV0XYXuC0e5rpDWjBLLLS8cNoi6tnCNPBSde4sMlbLLZQE8NmEZLmyyu3TjhJGVXlcHAYqAtNhc0Hkthtd3jgq/eF1A4wtMM6jPjnxmJ4++qQTw7wp6+rnNPtN+XXl+FXjgV0S7c2U1RpnDwXqb9EJr4PJFqN1CaRmVEp+KahyM1+nggbTGzl5NpVm/EAIykxhPPTqtyuYUXMD6YwyM/M08HfcYar52cJ7lbdidrnWd4Y89nIEk5fwdjEcDpPDLLkxuvSo2/dSXoVhtTajQ5plp8QeB8DnqESqudQDkNyI5IDCcgqIMlQV/wBnJIcOBVppWPim18WcFrYGpHiCtMYW/amW0S6k8/uwPkmDqJ+ESNHkHpE+imLZSmgHfup1I7jiEO5gHOe3QvYe4ktPmFathWioHbrtX04HVu7Pl9FWrewkgg8VN20RQgfNSe4D/vDm+arttrFrsDy9+CZM9tJmB74pzZ6O9UATSv8AMFO7P0pqJ30WPurXs/YIx7lebBQwUFdFKIVrstNY5OnEelTTkNXKbUWFlpps0tFNRdqs0qceE2rUkdGp9tsYxBEgrNtortNF+Hy5g8vwtltlnVT2jusVWFuuYPNbYZaY8mO4y4OjonNN0YJnaKZa4tIgiR4afRLszpw4Yj1C3co5bB5Jc+C6DI94ckMTknE0dp/HvguOCSxLBnNByrt+nu2BoVBRru/tugBxPykYCeWQnotkdjkvmJ+K2T9KNpv6il/TVXTWogbpObqeQM6kYDw4rn5MPsXKvjbMNUUABdJXCohPEpvbWSw8RiOoRiuLSEqF50d34g/a8Bw8x6qHuWpjOuX/AIuDvRW687JvMIjFskc2nTuVOslPcM/yJjqCQR4EKlTofaGzEGrGRJPqFQb5rfDq8iAR5rXLXZxULm/yZ9QFmt+2DfawYBzJY7uOHmqhVndqzHRWbZgf3FWrWMj1HvxVi2UqdtvMJ5dHh20u7KeIVmswVfu4ZKx2ULCuk7YEYMSWBFBRobCcE3qlFr1AoO872ZTBkqfFUpzaYUFeLBCi7XtK5xhg+5TKpRr1cTIH+RPkE5im1UNsrGN74jY/yjlqq5TdGKvV5XI0Ay4noqXXs248s009/Rb41z54+xmP10KVU/kPY4pvSOYR6btNNPt79VbItj59/VLjimpG6eWic0qk/n1TDjwnNy3q6y2ilaGTNNwLgP3MOD285aT3wm7vpw1CBUGoyU2HK+pbLaW1GNe0y1wDgRqCJBRSs8/SC/vi2f8Ap3Ht0cGzqw4gd2I6RzWghy5b6ulvSuFdXFUKhVW66qnX1Z9yYGG/vjlOBHkrmVHXjZd4THFXBDdhn4FQZEAeLfuqztRdm7WJAwd2u/Iqfu1hFEj+DsOUGfun942QVWtPf9FUpPmGuZB6qV2aqw5vIqJqZrlkrljhCuljdVuV21RAVgstoCya7qloe0FpdHIwpmxVrQ3Pe8QVjY6pltpgtQXTaMFT7HeD9VO2SrvJL0DetrIBhVG02d1R2JwVovanmoWicUHoSxXfTYJMdSou99qKNIlo7R68+Upjf39RaGVfgT8OkO1HzOOTg3kNVR7NSfVrD4dMjEQ0FzgIjGTJicSSrmO/dZ5cmrqRZbVtMx4yjoCfRRVrs3xWh7QcMMtIn0U9aroa54a0CZlxwgch4qao3a1tOA1G5OiuFvbMK7CD09keKVRdMjw99fNTV/2QNkqu0SZw9haSufKap4Wzh76IEkHgUfenFDqCU0u/E95eB9Eh1T3r3hJBOXn9kmoAfT8H0QErsvfLrLaWVQYEw7of9L6Kue9GWik2rTcHA8wY79ROq+WSY5q4/p3tg6x1Q1x/tOOIOQJ1zEaLLkw2uV9CgyuOTWxWxlRrajHAsdqNDp9k5csYZJKQ5KKSrlSaGnuv3gMHYO9CjWYQN3giEIW5BwVwq+YrZRg8imREO9+8wpeu2W9FG1RMHxWgq03DtEykyHZj3kFKt2ypwCadQNJIDowJESAdSJHiFQqDtyo14E8RxU3Ztnn1XDce3cJ3hvHlj2eMDTgFNxjXHPL4vlgvBlUAsMyrLddRQWzlyNaxrd53Z1gCTM8/9KztobpCxydeE32eXnZ96nKrt32cb5BVuojeZCrVYblTvUXL208SrJcjaDYYCczJJxmT01TY3a8zgBjOAAB6gZ96sNmtG8MUU0ArlLxV+jdfELtss8BTjmQoq8DgUleMZltZTjeVQscDeJIjHMwrntec1ndY9orfDp53L6p/Y6siCnQEqNshhSlSiQGvjsuGHPGD9QVbIB9Px058uqE5PBjmuPpf7+6JQjqzfAobsBKePpRgU3IzQGh/pjtY6nNFxJaNMDI4gchw4DXPabLaW1GNe0yCJHRfKVltD6VRtRhgtMgrcNgNpBWYS35gQXsnjgHDHiBPE55yMeTH6uVoJSCk0KwcMPfFLIWcopMr0rhXFpCfNzgoxzcS06+/VSw0TG1sxBWopsG8e9WvZGrDgCcFWd38qXuatuuCnLpfDfybNdcQITi0FQmzttBaFLWl6wvT0J6S11ukKE2jpQ7eUxczkLaekN2Vnq2bLy/JA3dbIOKsdCuCFT/it3Spq5qpfSa4+41V40ZXSSrvUJeL8CpSq5Ql5PVQrn6ULaXElZ7aWQ8rRb8/cs7rGXHkTHSSt8HBy9l0FKWe0QwNOj3nqHBmB5S13TeUXROCdNbl4+OXl9VVZQ+3NRl5JTSmNC1bpg5e8DxCeYHEHwyUqdfll4plWpY8E9a4j76JFUDUeiZIx7E/uG86lmqh9N0EZHD5Tn6SNU3qAaAITkHG8bO7TMrAQYfEls4OjNzCMs8sx0KtdntYcOeoOY+6+brrvQ03bw00HHjyOJxWhbP7Zb0b05YkQSPUjGeOeaxuF+KasUlRl13syoInvGE93eMNJCDtLtDTsrWl2JcYjun7JQmGNxAPGPv5ygVmSF6g6BB0/HvvSydOK3Bk37+/JEpPjHgu1Wa8CPrgfRcjP371SLr2uGzl7xGKu9ltm+sbstcsdyV4uC88sVjljquvDk3F3q3kaRHZdjwBI8QmN83m6o2AHE6YFS1leHtCI2k3l3pSRXlapt2XZVcf7pOJyGg4flXaxsDWADAAYBR1vttJjsXY6wmNfaakBqno9VNWmoFCW5y9StxqNDgCGnKcJ7k2tT8E9I2p20tWA5Z6M1d7/l791U+3Ut156rTBz8pLKnTwHlkndnJOJMkmSTnKYhSFj4clbICu3A9ffmvWasRHeO9ErjzP4TQa9ZHvogJBtqIwKE95QmdocxkfRdY85FMEklIkpwQgVAloEtqkJ7Rrg4RBzkfZMN5eDktGu1ybQupOAc8gcSJjhOpbj1GMTKl9q7z/AKllJ7cd0FrhmWnOJ1GoPlBCz2hbCMCA4cD98wnlG3gYzgRkcxyk4EcDnip0raRvqzfBtFWlIIa4wQcMJjLDIhR9SrHh79VqG3eyrKW7VaIb8lQ6AOADDHJ+fJZXeTNx7m8HR3Ixy2ZwwyPog5YHNAp18SOcJ1WbIkZqkgPCeWC1kYgpscROuR5fhNW1C1yVmxLpod17VVGjdDd49Y705Fa01cRhr75Ki3bbcQWnEeI6q9XLWNQYYcVOtOzh5ZOy/wD89xP9yoG4TDJJPLex4cswlMsTBAY3H+RxOSsthuZpEuk+X0Uh/QsaMAAproy55/MQlGmQ2EyvGoGtJKmrW4NCq9rYaz4/aPqp25b7QtjsZqOLzrl0Vc2jsUEn/I+/otOs9jgQFWtpLDIcOMlGGXtOeO4zeFIURBCBVpQ5Od3FbubQNQz4+iGWZHuS3HFdYNEA3DADmY5BP6raRaMXAj+UEEciIKavZivNp8fFUSSFpoBn/LM8REfjxUZWqieyCOpUjY7IwnMxrH2hHtF2MZjvMPJzi090x5JBB/FPCU/sVwWis3fZTJBJAwdiRnGCe2S32dgMsfMZMc5sniTOSYtvOoHkte8N3i4ML37uesOmeJmeaDNbTYKlN+49hDjEDjOAjvQnsc3BwI6ghXa33GbXZG2uz0yHg9tgc9xMS1xZvElxDmgxnmoyw2+zPG5aviNc3UFzgTkZYTLHZ8sNMkE+ir7sTarHMcJBa4HvB+uS+cNp7EaNoex2JBjXTmc19P1mSAOv+18+/qvQ3bXvD9zRPXGR4bp71zcd9tVIecusp9Za2h4BMKmaLSfB+i6GdO3Eb3vEIFpZ+Em0OSfiSOYTBnUcQQ4YFWnZXagU3gVMAcCdO/gqzWCbwlrYluN9PoW7L5Y5oLXAjkZRrTeA4rEbgtMGJWl3QJaFjlNOnDLZ/WcXnknFlsQGiNZqSf02KK0NhRUReVkk4qfITW2UZU70NbZPf907hkDIwemBb9lEgZFaXfFzuqA6aZTIGOSoV4Xe6i8scObToQtsM9xhnhYiq1PEpLPr7xTqqz6eSDUYtIysKgFI+HC6HcfEZeCWHjimQYauOp9Ep7wgmqgPOYOX1SMF4v5eS4EBctjNtDZAKb2F1IEkbpdviTJgb7WkTJ0zzV5sW2V2Wlx+MymCBINopHHo6amOOU8VjARqYU3GU9tYvb9XahkWeztYNHVXF7tD8jYAPeVnm0d71bS7erP3iMYAAaOgCZkZdBMdJic5HHrxCQ9hIOBy198UTGToSo92a4xEqsQxmqBdUpNMrrkkBBOubggPYnEpD26IOl3c+HLTtlbWC0CVlNMwVd9ka8kQozacd9tRspThzkwsckKSoUSVja6NPUqclORZ0elShOGsWOVaSaR5soHRU/ai4hUaYGI+U8OXRXys1NbRQBCMctDKbjAatItcWnAgxihOp8PBXvbnZ4/82mMdY194fVUTenrr1XXjluOPPHxugIz8ikuA4Iz8RlKFvDoeStloEwhPYnLx3oBb1HvgmASIS6ZSoC8GQgCwiNCQCu/EjmgLLb7KKR+Gwio8YP3AS1pGm+R2jicsFGf1HXwhXnbq9Klnqmy0Ph06Y7TzT3XGo55JO+4txGhbGmPAVKveVSo0NqVGuDR2QWskDluNlTpSGrs3jwQfgRzU0+pS3Tg6eg8yceij6Lt53LgqKmZpwguKf2vAZdVHR5JkUMQeiKWzB5JNEevoityn3kkDZjMVNXBXNOqCNSolg7RTig+CDwSs3Dxuq3O5Kwe0OGRCn6TVR9ibXLBj/tXii7BcWXbvx6GaEuUgLxcs7VlEoT2pbUpTsIe9bJv03DkfFY/thdfwiKzR2XGDyMrdKzMFS9o7qFSlWpkDVzeXuPNa8XJqo5MPKMiY+evmhVWA4j3yKCJaSDgQSD1GBTprpzz1+67nAbBe3pz8R9kqoMUghMiatP8A2vU84PcUreXd3UZcOCAUhko2abzonCXK8L2sps5oMszmPFQltQ1C+GmMCTqYiAIxnNVus4A8E4rdqQc0EtkQ4THj4paN5wgSTIPlw8Uawsgbztc+nBAoNJOOQyGqc2uRDNdfsg4Z2t28Z44/ZNd3PpHen1QR71GnomlTCeWHUnP3yQK5SbhPD7t+xRXthvvmfUIgZDQ3U592JQrS/CO/8II2BxlOmJrSCdUh79+8Ewvf6b1yXOZOQJ8vstQsrsAVkX6b1ItkcWOH1lbDZGYBcXNNZO3hu8RpXQF0NS2LnrZxrUpdK4RKkyXFRFtojex1w+p+6mC1Q20FtbRpuqv+Wn2j9AB3kwjHsWsD2gpbtqrt4Van/sU3addQu2isaj31HfM9znHq47xH1XqbY716s6eZe3ahkT3EIIKITB5aoLxBTISEtrYXKDUuqdPFAcGBn3xTeqIKOTiR0Q3EkDDEYIhJFw1GY05Ihbhgm7AScO9SFHsjn5flOiPUKIZic8+nHv5puREuOaK54iTlPl+UzrVvHRLSthOd74LtOlMYdPuUanZsMep/PIJFWuP2pkTaKgCjnPkpdRxJPf8AZc3cUAtoR2FIalsCWws36eu/41p4NefJbdZG9kLGv0xs+9aidGtM95n0W0WfJcf+i/k7OD9RSFxeK8uatnkpq4ubyRx1xWO/qdtGKrjZqRljXdtwODnDQcQDPfHBWbb/AGx+EHWeg7+5k94/6YP7R/n5dVkLjJXVwcX9Vz83J/MDpsRd3zXQEhxXW5g6oQt3KcIRayBmmmnDag+yT/tcYulACc/M++S69+RGo9+SFUdK4H4Jkm2AjkvPq/jpx78VwuIHFNqrvKO9Bi2mpDQBwnz+6aMq66pVYEgdAPBAcIxTIupa3OwXaboEobKeOGSLUGiAE0cepXGuzXahwhBc5SZ1TKNTTWhJMDVPKTd5263EmAPfikcjS/0ssO7TfVI+Z2HQYLSKJwUFstd4pUKbODRPVTwELg5Mt5O/DHU0JC4UN1UBCrWxjWlz3BrQJJcQABzKyq9HRKz/AG224FMuoWZ0vxD6gxDP8W8Xc9OuUPtl+oJqTRspLWZOq5Odybq1vPM8taBvLq4uD7k5uTm+YiWmoSTj1nPx4puV17lxoXW5dlbyQSlnr7wXDGmKAFVCTRpk5e8EupxTi73CCMzBMdcPUIN6+KLadUsYZAayTjmWgnE55jHJM6zsFYbbstXZZ3WpzqZh432MLSWtfukVJByJqU8ADg8GVWLQ6TCcTQlxx0SklwTJLWipihV/VcXkjEfke77eiG3FcXkw4cEh9U5Ly8kYDihyvLyQOKLoGGqtOw9ja+sCdIPivLyjk/Wr4/2bhYmw0L1asV5eXmZ16OKLvG3GnTe+J3Wl0TEwMp0WQ7QbSVrUZeYZMtpj5R/9HmfovLy6f8mMu7e3P/qyssk6QpwxQi5eXl3ON1gRV1eQA4ldDV1eSBtWdP1+imq1ZtIuYxgyIdOLT2sOyRpunl2jgvLyAY3he9Z7d11RxbDQGDssAYN1sU2w3BoAmJgKJleXlSXQk1V5eQH/2Q==' }}
                        style={styles.profile}
                    />
                    <TouchableOpacity>
                        <Text style={styles.profiletext}>프로필사진 수정하기</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.infobox}>
                    <Text style={styles.name}>Nguyễn Công Phượng <Text style={{ color: '#3E7BC9' }}>(응우옌꽁프엉)</Text></Text>
                    <Text style={styles.info}>23세 여</Text>
                    <Text style={styles.info}>베트남</Text>
                    <Text style={styles.phone}>+84 093-1345134</Text>
                    <Text style={styles.modify}>수정하기</Text>
                </View>

                <View style={styles.menuBox}>
                    <View style={styles.menuItem}>
                        <Text style={styles.menuText}>AI에게 질문하기</Text>
                    </View>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={styles.menuText}>비밀번호 변경</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={styles.menuText}>112/119 긴급 신고</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.logout}>
                    <Text style={styles.logoutText}>로그아웃</Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>이용약관</Text>
                    <Text style={styles.footerText}>개인정보처리방침</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    scrollContent: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 20,
    },
    profilecontainer: {
        alignItems: "center",
    },
    profile: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    profiletext: {
        fontSize: 12,
        color: '#9F9F9F',
        marginTop: 8,
    },
    infobox: {
        marginTop: 20,
        width: '100%',
        padding: 16,
        borderRadius: 6,
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    info: {
        fontSize: 14,
        color: '#555',
        marginBottom: 2,
    },
    phone: {
        fontSize: 14,
        color: '#3E7BC9',
        marginTop: 4,
    },
    modify: {
        fontSize: 12,
        color: '#888',
        marginTop: 8,
    },
    menuBox: {
        marginTop: 20,
        width: '100%',
    },
    menuItem: {
        backgroundColor: '#F0F0F0',
        padding: 14,
        borderRadius: 8,
        marginBottom: 10,
    },
    menuText: {
        fontSize: 14,
        color: '#000',
    },
    logout: {
        alignItems: "center",
        marginTop: 30,
        marginBottom: 10,
    },
    logoutText: {
        fontSize: 16,
        fontWeight: '600',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        width: '100%',
        marginTop: 20,
    },
    footerText: {
        fontSize: 12,
        color: '#666',
    },
});