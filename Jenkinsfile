pipeline {
    agent any
    tools {
		nodejs 'NodeJS'
	}	
    environment {
		SONAR_SCANNER_HOME = tool 'SonarQubeScanner'
		SONAR_PROJECT_KEY = 'secure'
        DOCKER_HUB_REPO = 'emrehannclk/secure'
        
		
	}
    stages {
        stage('Github') {
            steps {
                git branch: 'main', credentialsId: 'github-token', url: 'https://github.com/emrehannclkBackup/secure-coding'
                sh "echo SONAR_SCANNER_HOME=${SONAR_SCANNER_HOME}"
                echo "debug prints"
                

               }
        }
         stage('SonarQube Analysis'){
			steps {
				withCredentials([string(credentialsId: 'sonar', variable: 'SONAR_TOKEN')]) {


    					
					withSonarQubeEnv('SonarQubeLocal') {
								
                        sh """
                        echo 'Starting Sonar Scanner...'
                        echo 'Starting Sonar Scanner...'
                        echo 'Starting Sonar Scanner...'
                        echo 'Starting Sonar Scanner...'
                        echo 'SONAR_SCANNER_HOME: ${SONAR_SCANNER_HOME}'
                        echo 'SONAR_PROJECT_KEY: ${SONAR_PROJECT_KEY}'
                        echo 'SONAR_TOKEN: ${SONAR_TOKEN}'
                        echo 'SonarQube URL: http://sonarqube:9000'

                        ${SONAR_SCANNER_HOME}/bin/sonar-scanner -Dsonar.projectKey=${SONAR_PROJECT_KEY} \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=http://sonarqube:9000 \
                        -Dsonar.login=${SONAR_TOKEN}

                       echo 'Sonar Scanner finished.'"""

					}
				}
			}
		}

        stage('Docker Image'){
			steps {
				script {
					dockerImage = docker.build("${DOCKER_HUB_REPO}:latest")
				}
			}
		}
		stage('Trivy Scan'){
			steps {
                
					
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
