#include <string>

namespace log_line {
    std::string message(std::string line) {
        int startIndex = line.find(":") + 2;
        return line.substr(startIndex);
    }

    std::string log_level(std::string line) {
        int startIndex = line.find("[") + 1;
        int endIndex = line.find("]") - 1;
        return line.substr(startIndex, endIndex);
    }

    std::string reformat(std::string line) {
        return message(line) + " (" + log_level(line) + ")";
    }  // namespace log_line
}
