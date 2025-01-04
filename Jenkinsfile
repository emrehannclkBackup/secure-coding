pipeline {
    agent any
    stages {
        stage('Github') {
            steps {
                git branch: 'main', credentialsId: 'github', url: 'https://github.com/emrehannclkBackup/secure-coding.git'
                echo 'Cloning the project from Github...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the project...'
            }
        }
    }
}

