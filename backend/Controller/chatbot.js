const fs = require("fs");
const path = require("path");

const Course = require("../Models/courseModel");

let lastNoticeText = "";
let lastNoticeTitle = "";

const askChatbot = async (req, res) => {

    try {

        const userMessage =
            req.body.message
                ?.toLowerCase()
                ?.trim() || "";

        if (!userMessage) {

            return res.status(200).json({
                answer: "Please ask something."
            });
        }
        // GREETINGS
        const greetings = [
            "hi",
            "hello",
            "hlo",
            "hey",
            "hy",
            "hii",
            "Hii",
            "HY",
            "Hello",
            "Hlo",
            "Hey"
        ];

        if (
            greetings.includes(userMessage)
        ) {

            return res.status(200).json({
                answer:
                    "Hello 👋 I am Campus Connect Assistant. How may I help you?"
            });
        }

        // NORMALIZE FUNCTION
        const normalizeText = (text) => {

            return text
                ?.toLowerCase()
                ?.replace(/\./g, "")
                ?.replace(/,/g, "")
                ?.replace(/\s+/g, " ")
                ?.trim();
        };
        const collegeDataFolder = path.join(
            __dirname,
            "../college_data"
        );

        const ugCourseFilePath = path.join(
            collegeDataFolder,
            "ugCoursesData.txt"
        );

        const pgCourseFilePath = path.join(
            collegeDataFolder,
            "pgCoursesData.txt"
        );

        const infoDataFilePath = path.join(
            collegeDataFolder,
            "infoData.txt"
        );

        // NOTICE 

        const noticeBaseFolder = path.join(
            collegeDataFolder,
            "notices"
        );

        const generalNoticeFolder = path.join(
            noticeBaseFolder,
            "generalNotice"
        );

        const feeNoticeFolder = path.join(
            noticeBaseFolder,
            "feeNotice"
        );

        const sportsNoticeFolder = path.join(
            noticeBaseFolder,
            "sportsNotice"
        );

        const scholarshipNoticeFolder = path.join(
            noticeBaseFolder,
            "scholarshipNotice"
        );

        let ugCourseData = "";
        let pgCourseData = "";
        let infoData = "";

        if (fs.existsSync(ugCourseFilePath)) {

            ugCourseData =
                fs.readFileSync(
                    ugCourseFilePath,
                    "utf-8"
                );
        }

        if (fs.existsSync(pgCourseFilePath)) {

            pgCourseData =
                fs.readFileSync(
                    pgCourseFilePath,
                    "utf-8"
                );
        }

        if (fs.existsSync(infoDataFilePath)) {

            infoData =
                fs.readFileSync(
                    infoDataFilePath,
                    "utf-8"
                );
        }
        // COLLEGE INFORMATION

const isCollegeQuery =
    userMessage.includes("college") ||
    userMessage.includes("director") ||
    userMessage.includes("principal") ||
    userMessage.includes("principle") ||
    userMessage.includes("vision") ||
    userMessage.includes("mission") ||
    userMessage.includes("placement") ||
    userMessage.includes("faculty") ||
    userMessage.includes("campus") ||
    userMessage.includes("recruiter") ||
    userMessage.includes("facilities");

if (
    isCollegeQuery &&
    !userMessage.includes("course") &&
    !userMessage.includes("notice")
) {

    // DIRECTOR / PRINCIPAL

    if (
        userMessage.includes("director") ||
        userMessage.includes("principal") ||
        userMessage.includes("principle")
    ) {

        return res.status(200).json({
            answer:
                "Director of MYCOLLEGE is Mr. Aadarsh."
        });
    }

    // VISION

    if (
        userMessage.includes("vision")
    ) {

        return res.status(200).json({
            answer:
                "Vision:\nTo become a globally recognized institution that inspires innovation, leadership, research, and excellence in education while preparing students for future challenges."
        });
    }

    // MISSION

    if (
        userMessage.includes("mission")
    ) {

        return res.status(200).json({
            answer:
                "Mission:\nTo provide high-quality education, practical learning, ethical values, and industry exposure that help students become skilled professionals and responsible citizens."
        });
    }

    // PLACEMENT

    if (
        userMessage.includes("placement")
    ) {

        return res.status(200).json({
            answer:
                "MYCOLLEGE provides excellent placement support with 95% placement rate and top recruiters like TCS, Infosys, Wipro, Accenture, Capgemini, Cognizant, HCL, and Tech Mahindra."
        });
    }

    // FACULTY

    if (
        userMessage.includes("faculty")
    ) {

        return res.status(200).json({
            answer:
                "MYCOLLEGE has 100+ experienced faculty members focused on practical learning, innovation, and student development."
        });
    }

    // CAMPUS / FACILITIES

    if (
        userMessage.includes("campus") ||
        userMessage.includes("facilities")
    ) {

        return res.status(200).json({
            answer:
                "MYCOLLEGE campus provides smart classrooms, advanced computer labs, sports facilities, modern infrastructure, digital learning environment, placement support, and research labs."
        });
    }

    // RECRUITERS

    if (
        userMessage.includes("recruiter")
    ) {

        return res.status(200).json({
            answer:
                "🏢 Top recruiters of MYCOLLEGE are TCS, Infosys, Wipro, Accenture, Capgemini, Cognizant, HCL, and Tech Mahindra."
        });
    }

    // DEFAULT ABOUT COLLEGE

    return res.status(200).json({
        answer:
            "🏫 MYCOLLEGE is a leading educational institution focused on academic excellence, innovation, research, practical learning, and career-oriented education."
    });
}

        // NOTICE QUERY
        const isNoticeQuery =
            userMessage.includes("notice") ||
            userMessage.includes("notic") ||
            userMessage.includes("sports") ||
            userMessage.includes("sport") ||
            userMessage.includes("fee") ||
            userMessage.includes("scholarship") ||
            userMessage.includes("current") ||
            userMessage.includes("cricket") ||
            userMessage.includes("football") ||
            userMessage.includes("hockey") ||
            userMessage.includes("kabaddi") ||
            userMessage.includes("match") ||
            userMessage.includes("tournament") ||
            userMessage.includes("class") ||
            userMessage.includes("exam");

        if (isNoticeQuery) {

            let selectedFolder =
                generalNoticeFolder;

            let noticeType =
                "📢 General Notice";

            let keywordFile = "";

            // =====================================================
            // FEE NOTICE
            // =====================================================

            if (
                userMessage.includes("fee")
            ) {

                selectedFolder =
                    feeNoticeFolder;

                noticeType =
                    "💰 Fee Notice";

                if (userMessage.includes("1st")) {

                    keywordFile = "1st";
                }

                else if (userMessage.includes("2nd")) {

                    keywordFile = "2nd";
                }

                else if (userMessage.includes("3rd")) {

                    keywordFile = "3rd";
                }

                else if (userMessage.includes("4th")) {

                    keywordFile = "4th";
                }
            }

            // =====================================================
            // SCHOLARSHIP NOTICE
            // =====================================================

            else if (
                userMessage.includes("scholarship")
            ) {

                selectedFolder =
                    scholarshipNoticeFolder;

                noticeType =
                    "🎓 Scholarship Notice";

                if (
                    userMessage.includes("obc")
                ) {

                    keywordFile = "obc";
                }

                else if (
                    userMessage.includes("sc") ||
                    userMessage.includes("st")
                ) {

                    keywordFile = "scst";
                }

                else if (
                    userMessage.includes("merit")
                ) {

                    keywordFile = "merit";
                }
            }

            // =====================================================
            // SPORTS NOTICE
            // =====================================================

            else if (
                userMessage.includes("sports") ||
                userMessage.includes("cricket") ||
                userMessage.includes("football") ||
                userMessage.includes("hockey") ||
                userMessage.includes("kabaddi")
            ) {

                selectedFolder =
                    sportsNoticeFolder;

                noticeType =
                    "🏆 Sports Notice";

                if (
                    userMessage.includes("cricket")
                ) {

                    keywordFile = "cricket";
                }

                else if (
                    userMessage.includes("football")
                ) {

                    keywordFile = "football";
                }

                else if (
                    userMessage.includes("hockey")
                ) {

                    keywordFile = "hockly";
                }

                else if (
                    userMessage.includes("kabaddi")
                ) {

                    keywordFile = "kabaddi";
                }
            }

            // =====================================================
            // GENERAL NOTICE
            // =====================================================

            else {

                selectedFolder =
                    generalNoticeFolder;

                noticeType =
                    "📢 General Notice";

                if (
                    userMessage.includes("1st")
                ) {

                    keywordFile = "1st";
                }

                else if (
                    userMessage.includes("2nd")
                ) {

                    keywordFile = "2nd";
                }

                else if (
                    userMessage.includes("3rd")
                ) {

                    keywordFile = "3rd";
                }

                else if (
                    userMessage.includes("4th")
                ) {

                    keywordFile = "4th";
                }
            }

            // =====================================================
            // CHECK FOLDER
            // =====================================================

            if (
                !fs.existsSync(
                    selectedFolder
                )
            ) {

                return res.status(200).json({
                    answer:
                        "Currently this notice is not uploaded from college side."
                });
            }

            let files =
                fs.readdirSync(
                    selectedFolder
                );

            files = files.filter(file =>
                file.endsWith(".txt")
            );

            if (files.length === 0) {

                return res.status(200).json({
                    answer:
                        "Currently this notice is not uploaded from college side."
                });
            }

            // =====================================================
            // FIND MATCHED FILE
            // =====================================================

            let selectedFile = "";

            if (keywordFile) {

                const matchedFile =
                    files.find(file =>
                        file
                            .toLowerCase()
                            .includes(keywordFile)
                    );

                if (!matchedFile) {

                    return res.status(200).json({
                        answer:
                            "There is no notice present regarding this."
                    });
                }

                selectedFile =
                    matchedFile;
            }

            // =====================================================
            // LATEST FILE
            // =====================================================

            if (!selectedFile) {

                files.sort((a, b) => {

                    const aPath =
                        path.join(
                            selectedFolder,
                            a
                        );

                    const bPath =
                        path.join(
                            selectedFolder,
                            b
                        );

                    return (
                        fs.statSync(bPath).mtime -
                        fs.statSync(aPath).mtime
                    );
                });

                selectedFile =
                    files[0];
            }

            // =====================================================
            // READ NOTICE
            // =====================================================

            const filePath = path.join(
                selectedFolder,
                selectedFile
            );

            const text =
                fs.readFileSync(
                    filePath,
                    "utf-8"
                );

            lastNoticeText = text;

            const lines = text
                .split("\n")
                .filter(line =>
                    line.trim() !== ""
                );

            lastNoticeTitle =
                lines[0] ||
                "Latest Notice";

            const shortDescription =
                lines
                    .slice(1, 5)
                    .join(" ");

            return res.status(200).json({
                answer:
                    `${noticeType}\n\n${lastNoticeTitle}\n\n${shortDescription}`
            });
        }

        // COURSES
        const courses =
            await Course.find({});

        if (
            userMessage.includes("ug") ||
            userMessage.includes("under graduate")
        ) {

            const ugCourses =
                courses.filter(course => {

                    const name =
                        course.courseName?.toLowerCase() || "";

                    return (
                        name.includes("b.tech") ||
                        name.includes("b.e") ||
                        name.includes("bca") ||
                        name.includes("bba") ||
                        name.includes("b.sc")
                    );
                });

            let reply =
                "🎓 UG Courses:\n\n";

            ugCourses.forEach((course, index) => {

                reply +=
                    `${index + 1}. ${course.courseName}\n`;
            });

            return res.status(200).json({
                answer: reply
            });
        }
        if (
            userMessage.includes("pg") ||
            userMessage.includes("post graduate")
        ) {

            const pgCourses =
                courses.filter(course => {

                    const name =
                        course.courseName?.toLowerCase() || "";

                    return (
                        name.includes("m.tech") ||
                        name.includes("mba") ||
                        name.includes("mca") ||
                        name.includes("m.sc")
                    );
                });

            let reply =
                "🎓 PG Courses:\n\n";

            pgCourses.forEach((course, index) => {

                reply +=
                    `${index + 1}. ${course.courseName}\n`;
            });

            return res.status(200).json({
                answer: reply
            });
        }

        if (
            userMessage.includes("course") ||
            userMessage.includes("courses")
        ) {

            const ugCourses =
                courses.filter(course =>
                    course.courseName
                        ?.toLowerCase()
                        .includes("b.")
                );

            const pgCourses =
                courses.filter(course =>
                    course.courseName
                        ?.toLowerCase()
                        .includes("m.")
                );

            let reply = "";

            reply += "🎓 UG Courses:\n\n";

            ugCourses.forEach((course, index) => {

                reply +=
                    `${index + 1}. ${course.courseName}\n`;
            });

            reply += "\n🎓 PG Courses:\n\n";

            pgCourses.forEach((course, index) => {

                reply +=
                    `${index + 1}. ${course.courseName}\n`;
            });

            return res.status(200).json({
                answer: reply
            });
        }
        const detailWords = [
            "detail",
            "details",
            "about",
            "fees",
            "eligibility",
            "semester",
            "duration",
            "tell me",
            "information"
        ];

        const isCourseDetailQuery =
            detailWords.some(word =>
                userMessage.includes(word)
            );

        if (isCourseDetailQuery) {

            let matchedCourse = null;
            let selectedData = "";

            const normalizedMessage =
                normalizeText(userMessage);

            // =====================================================
            // FIND COURSE
            // =====================================================

            for (const course of courses) {

                const normalizedCourseName =
                    normalizeText(
                        course.courseName
                    );

                const shortName =
                    normalizedCourseName
                        .replace("engineering", "")
                        .trim();

                if (
                    normalizedMessage.includes(normalizedCourseName) ||
                    normalizedMessage.includes(shortName)
                ) {

                    matchedCourse = course;

                    if (
                        normalizedCourseName.includes("mtech") ||
                        normalizedCourseName.includes("mba") ||
                        normalizedCourseName.includes("mca") ||
                        normalizedCourseName.includes("msc")
                    ) {

                        selectedData =
                            pgCourseData;
                    }

                    else {

                        selectedData =
                            ugCourseData;
                    }

                    break;
                }
            }

            // =====================================================
            // COURSE NOT FOUND
            // =====================================================

            if (!matchedCourse) {

                return res.status(200).json({
                    answer:
                        "Course details not found."
                });
            }

           // =====================================================
// FIND COURSE BLOCK CORRECTLY
// =====================================================

const courseBlocks =
    selectedData.match(/\{[\s\S]*?status:\s*"Active"[\s\S]*?\}/g);

let matchedBlock = "";

if (courseBlocks) {

    for (const block of courseBlocks) {

        const cleanBlock =
            block.toLowerCase();

        const cleanCourseName =
            matchedCourse.courseName.toLowerCase();

        if (
            cleanBlock.includes(cleanCourseName)
        ) {

            matchedBlock = block;
            break;
        }
    }
}

            // =====================================================
            // EXTRACT VALUES
            // =====================================================

            const getValue = (regex) => {

                const match =
                    matchedBlock.match(regex);

                return match
                    ? match[1]
                    : "N/A";
            };

            const duration =
                getValue(
                    /duration:\s*"([^"]+)"/
                );

            const semesters =
                getValue(
                    /totalSemesters:\s*([0-9]+)/
                );

            const qualification =
                getValue(
                    /qualification:\s*"([^"]+)"/
                );

            const totalFees =
                getValue(
                    /totalFees:\s*([0-9]+)/
                );

            const perYear =
                getValue(
                    /perYear:\s*([0-9]+)/
                );

            const perSemester =
                getValue(
                    /perSemester:\s*([0-9]+)/
                );

            // =====================================================
            // FINAL RESPONSE
            // =====================================================

            return res.status(200).json({
                answer:
`📘 ${matchedCourse.courseName}

⏳ Duration: ${duration}

📚 Total Semesters: ${semesters}

✅ Eligibility: ${qualification}

💰 Total Fees: ₹${totalFees}

💵 Per Year Fees: ₹${perYear}

🏷 Per Semester Fees: ₹${perSemester}`
            });
        }
        return res.status(200).json({
            answer:
                "Sorry, I am not able to answer your query. Please fill the enquiry form. Our team will definitely connect you within 24 hours."
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            answer:
                "Server Error"
        });
    }
};

module.exports = {
    askChatbot
};