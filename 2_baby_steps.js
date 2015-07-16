var total = 0;
process.argv;
for (var i = 2; i < process.argv.length; i++) {
	total += Number(process.argv[i]);
}
console.log(total);
total = 0;