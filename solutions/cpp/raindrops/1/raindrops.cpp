#include "raindrops.h"

namespace raindrops {

// TODO: add your solution here
	std::string convert(int num) {
		std::string output = "";
		if (num % 3 == 0) {
			output += "Pling";
		}
		if (num % 5 == 0) {
			output += "Plang";
		}
		if (num % 7 == 0) {
			output += "Plong";
		}
		if (output == "") {
			output = std::to_string(num);
		}
		return output;
	}

}  // namespace raindrops
