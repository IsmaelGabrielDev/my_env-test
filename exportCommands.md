Exemplo de comandos com envio de variaveis de ambiente

#shell (linux, macos, gitbash windows)
CYPRESS_MY_ENV=hml npx cypress open

export CYPRESS_MY_ENV="hml"
npx cypress open

#cmd
set CYPRESS_MY_ENV="hml"
npx cypress open

#powershell
$env:CYPRESS_MY_ENV="hml"
npx cyperess open



# --env commands

npx cypress open --env MY_ENV="local"