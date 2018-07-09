cd HoursCalculator/src/

./build.wab

mv HoursCalculator.jar ../../HC.jar

cd ../../

java -jar HC.jar README.md 5 9

rm HC.jar

echo "file totalDayHours.md succesfully created"


