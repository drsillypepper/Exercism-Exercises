#include "darts.h"
#include <cmath>

namespace darts {

// TODO: add your solution here
	int TARGET_INNER_RADIUS = 1;
	int TARGET_MIDDLE_RADIUS = 5;
	int TARGET_OUTER_RADIUS= 10;

	int TARGET_INNER_SCORE = 10;
	int TARGET_MIDDLE_SCORE = 5;
	int TARGET_OUTER_SCORE = 1;
	int TARGET_OUTSIDE_SCORE = 0;

	int score(double x, double y) {
		double distanceFromCenter = sqrt(pow(x, 2) + pow(y, 2));
		if (distanceFromCenter <= TARGET_INNER_RADIUS) {
			return TARGET_INNER_SCORE;
		}
		else if (distanceFromCenter <= TARGET_MIDDLE_RADIUS) {
			return TARGET_MIDDLE_SCORE;
		}
		else if (distanceFromCenter <= TARGET_OUTER_RADIUS) {
			return TARGET_OUTER_SCORE;
		}
		return TARGET_OUTSIDE_SCORE;
	}
}  // namespace darts
