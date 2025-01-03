pipeline {
    agent any
    tools {
		nodejs 'NodeJS'
	}	

    stages {
        stage('Github') {
            steps {
                git branch: 'main', credentialsId: 'github-token', url: 'https://github.com/emrehannclkBackup/secure-coding'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
				sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the project...'
            }
        }
    }
}
