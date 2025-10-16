pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'dockerhub_hermogene2001/my-web-app'
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'
    }

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/hermogene2001/docker-node-app.git'
            }
        }

        stage('Verify Tools') {
            steps {
                // Ensure the necessary tools are installed (Node.js and npm)
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Build') {
            steps {
                echo "Building the project..."
                sh 'ls -la'  // You can replace this with your actual build command (e.g., `npm install`, `npm run build`, etc.)
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${DOCKER_IMAGE}:latest")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_CREDENTIALS_ID) {
                        dockerImage.push('latest')
                    }
                }
            }
        }

        stage('Deploy to Local Docker Host') {
            steps {
                sh '''
                docker rm -f my-web-app || true
                docker run -d --name my-web-app -p 8080:80 ${DOCKER_IMAGE}:latest
                '''
            }
        }
    }
}
