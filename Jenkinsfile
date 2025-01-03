pipeline {
    agent any
    tools {
		nodejs 'NodeJS'
	}	
    environment {
		SONAR_SCANNER_HOME = tool 'SonarQubeScanner'
		SONAR_PROJECT_KEY = 'secure'
		
	}
    stages {
        stage('Github') {
            steps {
                git branch: 'main', credentialsId: 'github-token', url: 'https://github.com/emrehannclkBackup/secure-coding'
            }
        }
         stage('SonarQube Analysis'){
			steps {
				withCredentials([string(credentialsId: 'sonar', variable: 'SONAR_TOKEN')]) {
    					
					withSonarQubeEnv('SonarQube') {
						sh """
						${SONAR_SCANNER_HOME}/bin/sonar-scanner \
						-Dsonar.projectKey=${SONAR_PROJECT_KEY} \
						-Dsonar.sources=. \
						-Dsonar.host.url=http://sonarqube:9000 \
						-Dsonar.login=${SONAR_TOKEN}
						"""   						
					}
				}
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
