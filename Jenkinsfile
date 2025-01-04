pipeline {
    agent any
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
               
                echo 'Cloning the project from Github...'
                git branch: 'main', credentialsId: 'github', url: 'https://github.com/emrehannclkBackup/secure-coding.git'
                echo 'Cloning the project from Github...'
                sh 'ls -la'
              
            }
        }

        stage('Unit Test') {
            steps {
               echo 'Npm is being used'
               sh 'npm test'
               sh 'npm install'
               echo 'Npm is being used'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                echo 'Sonar scanning is starting'
            }
        }

        stage('Docker Image') {
            steps {
                echo 'Building Docker Image'
               
            }
        }

        stage('Trivy Scan') {
            steps {
                echo 'Trivy is scanning'
               
            }
        }

        stage('Push Image to DockerHub') {
            steps {
                echo 'Pushing Docker image to DockerHub'
              
            }
        }
    }
}
