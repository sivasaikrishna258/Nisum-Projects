pipeline {
    agent any

    parameters {
        choice(
            name: 'EXECUTION_MODE',
            choices: ['Parallel', 'Serial'],
            description: 'Choose how to execute Playwright tests.'
        )
        string(
            name: 'TAGS',
            defaultValue: '@smoke',
            description: 'Enter Cucumber tags to run (e.g., @login or @regression).'
        )
    }

    environment {
        NODE_HOME = 'C:\\Program Files\\nodejs'
        PATH = "${NODE_HOME}\\;${env.PATH}"
        HEADLESS = 'true'
    }

    stages {

        stage('Clean Workspace') {
            steps {
                echo '🧹 Cleaning workspace...'
                cleanWs()
            }
        }

        stage('Checkout Code') {
            steps {
                echo "🔁 Checking out current branch: ${env.BRANCH_NAME}"
                // Multibranch pipeline automatically sets SCM and BRANCH_NAME
                checkout scm
            }
        }

        stage('Setup') {
            steps {
                echo '📦 Installing dependencies and Playwright browsers...'
                bat '''
                    echo Installing npm dependencies...
                    npm install
                    echo Installing Playwright browsers...
                    npx playwright install --with-deps
                '''
            }
        }

        stage('Run Playwright Cucumber Tests') {
            steps {
                echo "🎭 Running Playwright Cucumber tests from branch: ${env.BRANCH_NAME}"
                echo "Execution mode: ${params.EXECUTION_MODE}"
                echo "Using tags: ${params.TAGS}"

                catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
                    bat """
if "${params.EXECUTION_MODE}" == "Parallel" (
    npx cross-env HEADLESS=true TAGS="${params.TAGS}" cucumber-js --format json:reports/cucumber-report.json --config tests/cucumber.js --parallel 3 --exit
) else (
    npx cross-env HEADLESS=true TAGS="${params.TAGS}" cucumber-js --format json:reports/cucumber-report.json --config tests/cucumber.js --tags "${params.TAGS}"
)
"""
                }

                bat "node generate-cucumber-report.js"
            }
        }

        stage('Publish Report') {
            steps {
                echo '📊 Publishing HTML report...'
                publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'reports/html-report',
                    reportFiles: 'index.html',
                    reportName: "QA Report",
                    includes: '**/*'
                ])
            }
        }
    }

    post {
        always {
            echo "🏁 Build finished for branch: ${env.BRANCH_NAME}"
        }
    }
}
