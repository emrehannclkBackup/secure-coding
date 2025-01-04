pipeline {
    agent any
     tools {
		nodejs 'NodeJS'
	}	



    stages {


        stage('List Files') {
            steps {
                script {
                    sh 'ls -la'
                }
            }
        }
        stage('Github') {
            steps {
                git branch: 'main', credentialsId: 'github', url: 'https://github.com/emrehannclkBackup/secure-coding.git'
                echo 'Cloning the project from Github...'
                sh 'ls -la'
            }
        }

        stage('npm') {
            steps {
               sh 'npm test'
               sh 'npm install'
               echo 'Npm is being used'

               }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the project...'
            }
        }
    }
}

