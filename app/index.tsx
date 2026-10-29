import { Link } from "expo-router";
import { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import Button from '/home/pedagogico/prjMobile/prj-mobile/src/components/Button';
import Input from '/home/pedagogico/prjMobile/prj-mobile/src/components/Input';

export default function Index() {
    // Mudado para export default direto na função
    // 2. Criação dos estados para armazenar o texto digitado
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Configuração do Color Scheme
    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";

    const colors = {
        background: isDark ? "#121212" : "#FDFDFD",
        textPrimary: isDark ? "#FFFFFF" : "#000000",
        textSecondary: isDark ? "#A0A0A0" : "#666666",
        link: isDark ? "#4D6BFF" : "#0A1172",
    };

    // Função que dispara o alerta nativo ao clicar no botão
    // 3. Nova função handleSignIn com a validação dos campos
    function handleSignIn() {
        if (!email.trim() || !password.trim()) {
            return Alert.alert("Entrar", "Preencha e-mail e senha para entrar.");
        }
    }

    return (

        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: colors.background }}
            behavior={Platform.select({ ios: "padding", android: "height" })}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.container}>
                    <Image
                        source={require('/home/pedagogico/prjMobile/prj-mobile/src/assets/scarthelionking.jpg')}
                        style={styles.logo}
                    />
                    <Text style={[styles.title, { color: colors.textPrimary }]}>Programação Mobile.</Text>
                    <Text style={[styles.subtitle, { color: colors.textSecondary }]}>Acesse sua conta</Text>
                    <View style={styles.form}>
                        <Input
                            placeholder="E-mail"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <Input
                            placeholder="Senha"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <Button label="Entrar" onPress={handleSignIn} />
                    </View>
                    <Text style={[styles.footerText, { color: colors.textSecondary }]}>
                        Não tem uma conta ?{" "}
                        <Link href="/signup" style={[styles.footerLink, { color: colors.link }]}>
                            Cadastre-se aqui.
                        </Link>
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 30,
    },
    form: {
        width: '100%',
        gap: 12,
        marginBottom: 20,
    },
    footerText: {
        fontSize: 14,
        color: '#666',
    },
    footerLink: {
        color: '#007AFF',
        fontWeight: 'bold',
    },
});
