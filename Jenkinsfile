pipeline {
    agent any

    stages {
        stage('Github') {
            steps {
                git branch: 'main', credentialsId: 'github-token', url: 'https://github.com/emrehannclkBackup/secure-coding'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the project...'
            }
        }
    }
}
