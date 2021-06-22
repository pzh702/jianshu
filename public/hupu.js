//爬取虎扑热帖,

const superagent = require("superagent");
const cheerio = require("cheerio");
const fs = require("fs-extra");

const mainUrl = "https://bbs.hupu.com"; //虎扑主域名
let hot_url = "/all-gambia"; //热帖区域

const get_hupu = (url) => {
	superagent.get(mainUrl + url).end((err, res) => {
		if (err) {
			console.log(err);
			return;
		}
		//解析数据
		let $ = cheerio.load(res.text);
		fs.writeFile(__dirname + "/hupu.html", res.text, (err) => {
			console.log(err);
		});
		let data = [];
		let a = $(".bbsHotPit .list li");
		a.each((i, item) => {
			let _this = $(item);
			let post_title = _this.find(".textSpan").find("span").text();
			let post_url = mainUrl + _this.find(".textSpan").find("a").attr("href");
			let post_em = _this.find(".textSpan").find("em").text().slice(1);
			let post_theme = _this.find(".forum").find("a").text();
			let obj = {
				title: post_title,
				url: post_url,
				em: post_em,
				theme: post_theme,
			};
			data.push(obj);
		});
		if (data.length > 0) {
			fs.writeFile(
				__dirname + "/api/hupu_hot.json",
				JSON.stringify({
					爬取的内容: "虎扑步行街热帖",
					data: data,
				}),
				(err) => {
					if (err) {
						console.log(err);
					} else {
						console.log("写入文件成功");
					}
				}
			);
		}
	});
};

get_hupu(hot_url);
